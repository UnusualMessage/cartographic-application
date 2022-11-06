using Identity.Application.Responses.UserResponses;
using MediatR;

namespace Identity.Application.Requests.Commands.UserCommands;

public class RefreshUser : IRequest<AuthenticateUserResponse>
{
    public string? RefreshToken { get; set; }

    public string? IpAddress { get; set; }
}