using Identity.Application.Responses.UserResponses;
using MediatR;

namespace Identity.Application.Requests.Queries.UserQueries;

public class GetAccessToken : IRequest<AuthenticateUserResponse>
{
    public string? RefreshToken { get; set; }
    public string? IpAddress { get; set; }
}