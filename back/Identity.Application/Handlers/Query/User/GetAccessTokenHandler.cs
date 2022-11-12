using Identity.Application.Requests.Queries.Auth;
using Identity.Application.Responses.Auth;
using Identity.Core.Interfaces.Services;
using MediatR;
using Shared.Core.Exceptions;

namespace Identity.Application.Handlers.Query.User;

public class GetAccessTokenHandler : IRequestHandler<GetAccessToken, AuthenticateUserResponse>
{
    private readonly ICachingService<Core.Entities.User> _cachingService;
    private readonly ITokenService _tokenService;

    public GetAccessTokenHandler(ITokenService tokenService, ICachingService<Core.Entities.User> cachingService)
    {
        _tokenService = tokenService;
        _cachingService = cachingService;
    }

    public async Task<AuthenticateUserResponse> Handle(GetAccessToken request, CancellationToken cancellationToken)
    {
        var cacheKey = request.RefreshToken;
        var user = await _cachingService.Cache(cacheKey ?? "");

        if (user is null) return FailToAccessToken();

        var refreshToken = user.RefreshTokens.Single(x => x.Token == request.RefreshToken);

        if (refreshToken.IsActive == false) return FailToAccessToken();

        var jwt = _tokenService.GetGeneratedAccessToken(user);

        return new AuthenticateUserResponse
        {
            RefreshToken = request.RefreshToken,
            AccessToken = jwt.Token
        };
    }

    private AuthenticateUserResponse FailToAccessToken()
    {
        throw new NotFoundException("Не удалось получить токен!");
    }
}