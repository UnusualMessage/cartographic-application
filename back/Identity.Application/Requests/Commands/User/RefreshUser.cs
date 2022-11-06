using Identity.Application.Responses.User;
using MediatR;

namespace Identity.Application.Requests.Commands.User;

public class RefreshUser : IRequest<AuthenticateUserResponse>
{
    public string? RefreshToken { get; set; }

    public string? IpAddress { get; set; }
}