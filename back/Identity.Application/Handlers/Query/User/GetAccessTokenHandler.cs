using System.Text;
using Common.Core.Exceptions;
using Identity.Application.Requests.Queries.User;
using Identity.Application.Responses.User;
using Identity.Core.Interfaces.Repositories;
using Identity.Core.Interfaces.Services;
using MediatR;
using Microsoft.Extensions.Caching.Distributed;
using Newtonsoft.Json;

namespace Identity.Application.Handlers.Query.User;

public class GetAccessTokenHandler : IRequestHandler<GetAccessToken, AuthenticateUserResponse>
{
    private readonly IUserRepository _userRepository;
    private readonly ITokenService _tokenService;
    private readonly IDistributedCache _cache;

    public GetAccessTokenHandler(IUserRepository userRepository, ITokenService tokenService, IDistributedCache cache)
    {
        _userRepository = userRepository;
        _tokenService = tokenService;
        _cache = cache;
    }
    
    public async Task<AuthenticateUserResponse> Handle(GetAccessToken request, CancellationToken cancellationToken)
    {
        var cacheKey = request.RefreshToken;
        Core.Entities.User? user;

        var cachedUser = await _cache.GetAsync(cacheKey, cancellationToken);

        if (cachedUser is not null)
        {
            var serializedUser = Encoding.UTF8.GetString(cachedUser);
            user = JsonConvert.DeserializeObject<Core.Entities.User>(serializedUser);
        }
        else
        {
            user = await _userRepository.GetUserByTokenAsync(request.RefreshToken ?? "");
            var serializedUser = JsonConvert.SerializeObject(user);
            cachedUser = Encoding.UTF8.GetBytes(serializedUser);
            
            await _cache.SetAsync(cacheKey, cachedUser,
                new DistributedCacheEntryOptions()
                    .SetSlidingExpiration(TimeSpan.FromMinutes(5))
                    .SetAbsoluteExpiration(DateTime.Now.AddHours(6)), cancellationToken);
        }

        if (user is null)
        {
            return FailToAccessToken();
        }

        var refreshToken = user.RefreshTokens.Single(x => x.Token == request.RefreshToken);

        if (refreshToken.IsActive == false)
        {
            return FailToAccessToken();
        }
        
        var jwt = _tokenService.GetGeneratedAccessToken(user);

        return new AuthenticateUserResponse()
        {
            RefreshToken = request.RefreshToken,
            AccessToken = jwt.Token,
        };
    }

    private AuthenticateUserResponse FailToAccessToken()
    {
        throw new NotFoundException("Не удалось получить токен!");
    }
}