using Identity.Application.Requests.Commands;
using Identity.Application.Responses;
using Identity.Core.Interfaces.Repositories;
using MassTransit.Mediator;

namespace Identity.Application.Consumers.Command.Auth;

public class RevokeUserHandler : MediatorRequestHandler<RevokeUser, RevokeUserResponse>
{
    private readonly IUserRepository _userRepository;

    public RevokeUserHandler(IUserRepository userRepository)
    {
        _userRepository = userRepository;
    }

    protected override async Task<RevokeUserResponse> Handle(RevokeUser request, CancellationToken cancellationToken)
    {
        var user = await _userRepository.GetUserByTokenAsync(request.RefreshToken ?? "");

        if (user is null) return FailRevoke();

        var refreshToken = user.RefreshTokens.Single(x => x.Token == request.RefreshToken);

        if (refreshToken.IsActive == false) return FailRevoke();

        refreshToken.Revoked = DateTime.UtcNow;
        refreshToken.RevokedByIp = request.IpAddress;

        await _userRepository.UpdateAsync(user);

        return new RevokeUserResponse(true);
    }

    private RevokeUserResponse FailRevoke()
    {
        return new RevokeUserResponse(true);
    }
}