using Identity.Application.Responses.UserResponses;
using MediatR;

namespace Identity.Application.Requests.Commands.UserCommands;

public class RevokeUser : IRequest<RevokeUserResponse>
{
    public string? RefreshToken { get; set; }
    public string? IpAddress { get; set; }
}