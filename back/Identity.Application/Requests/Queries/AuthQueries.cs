using Identity.Application.Responses;
using MediatR;

namespace Identity.Application.Requests.Queries;

public record GetAccessToken(string? RefreshToken) : IRequest<AuthenticateUserResponse>;