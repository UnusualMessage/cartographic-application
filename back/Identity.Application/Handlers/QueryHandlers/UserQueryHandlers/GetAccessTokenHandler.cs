using Common.Core.Exceptions;
using Identity.Application.Requests.Queries.UserQueries;
using Identity.Application.Responses.UserResponses;
using Identity.Core.Interfaces.Repositories;
using Identity.Core.Interfaces.Services;
using MediatR;

namespace Identity.Application.Handlers.QueryHandlers.UserQueryHandlers;

public class GetAccessTokenHandler : IRequestHandler<GetAccessToken, AuthenticateUserResponse>
{
    private readonly IUserRepository _userRepository;
    private readonly ITokenService _tokenService;

    public GetAccessTokenHandler(IUserRepository userRepository, ITokenService tokenService)
    {
        _userRepository = userRepository;
        _tokenService = tokenService;
    }
    
    public async Task<AuthenticateUserResponse> Handle(GetAccessToken request, CancellationToken cancellationToken)
    {
        var user = await _userRepository.GetUserByTokenAsync(request.RefreshToken ?? "");
        
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