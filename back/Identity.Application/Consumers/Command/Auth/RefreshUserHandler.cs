using Identity.Application.Requests.Commands;
using Identity.Application.Responses;
using Identity.Core.Interfaces.Repositories;
using Identity.Core.Interfaces.Services;
using MassTransit.Mediator;
using Shared.Core.Exceptions;

namespace Identity.Application.Consumers.Command.Auth;

public class RefreshUserHandler : MediatorRequestHandler<RefreshUser, AuthenticateUserResponse>
{
    private readonly ITokenService _tokenService;
    private readonly IUserRepository _userRepository;

    public RefreshUserHandler(IUserRepository repository, ITokenService service)
    {
        _userRepository = repository;
        _tokenService = service;
    }

    protected override async Task<AuthenticateUserResponse> Handle(RefreshUser request, CancellationToken cancellationToken)
    {
        var user = await _userRepository.GetUserByTokenAsync(request.RefreshToken ?? "");

        if (user is null) return FailAuthentication();

        var refreshToken = user.RefreshTokens.Single(x => x.Token == request.RefreshToken);

        if (refreshToken.IsActive == false) return FailAuthentication();

        var newRefreshToken = _tokenService.GetGeneratedRefreshToken(request.IpAddress ?? "");

        refreshToken.Revoked = DateTime.UtcNow;
        refreshToken.RevokedByIp = request.IpAddress;
        refreshToken.ReplacedByToken = newRefreshToken.Token;
        user.RefreshTokens.Add(newRefreshToken);

        await _userRepository.UpdateAsync(user);

        var jwt = _tokenService.GetGeneratedAccessToken(user);
        return new AuthenticateUserResponse(jwt.Token, refreshToken.Token);
    }

    private static AuthenticateUserResponse FailAuthentication()
    {
        throw new NotFoundException("");
    }
}