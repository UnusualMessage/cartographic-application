using Identity.Application.Responses.Auth;
using MediatR;

namespace Identity.Application.Requests.Queries.Auth;

public class GetAccessToken : IRequest<AuthenticateUserResponse>
{
    public string? RefreshToken { get; set; }
    public string? IpAddress { get; set; }
}