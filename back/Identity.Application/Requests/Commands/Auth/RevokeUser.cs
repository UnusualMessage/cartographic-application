using Identity.Application.Responses.Auth;
using MediatR;

namespace Identity.Application.Requests.Commands.Auth;

public class RevokeUser : IRequest<RevokeUserResponse>
{
    public string? RefreshToken { get; set; }
    public string? IpAddress { get; set; }
}