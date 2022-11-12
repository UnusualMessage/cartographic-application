using Identity.Application.Responses.Auth;
using MediatR;

namespace Identity.Application.Requests.Commands.Auth;

public class RefreshUser : IRequest<AuthenticateUserResponse>
{
    public string? RefreshToken { get; set; }

    public string? IpAddress { get; set; }
}