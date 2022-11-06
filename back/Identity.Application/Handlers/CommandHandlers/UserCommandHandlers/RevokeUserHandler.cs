using Identity.Application.Requests.Commands.UserCommands;
using Identity.Application.Responses.UserResponses;
using Identity.Core.Interfaces.Repositories;
using MediatR;

namespace Identity.Application.Handlers.CommandHandlers.UserCommandHandlers;

public class RevokeUserHandler : IRequestHandler<RevokeUser, RevokeUserResponse>
{
    private readonly IUserRepository _userRepository;

    public RevokeUserHandler(IUserRepository userRepository)
    {
        _userRepository = userRepository;
    }

    public async Task<RevokeUserResponse> Handle(RevokeUser request, CancellationToken cancellationToken)
    {
        var user = await _userRepository.GetUserByTokenAsync(request.RefreshToken ?? "");

        if (user is null)
        {
            return FailRevoke();
        }

        var refreshToken = user.RefreshTokens.Single(x => x.Token == request.RefreshToken);

        if (refreshToken.IsActive == false)
        {
            return FailRevoke();
        }

        refreshToken.Revoked = DateTime.UtcNow;
        refreshToken.RevokedByIp = request.IpAddress;

        await _userRepository.UpdateAsync(user);

        return new RevokeUserResponse()
        {
            Revoked = true
        };
    }

    private RevokeUserResponse FailRevoke()
    {
        return new RevokeUserResponse()
        {
            Revoked = false
        };
    }
}