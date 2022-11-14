using Identity.Application.Responses;
using MassTransit.Mediator;

namespace Identity.Application.Requests.Queries;

public record GetAccessToken(string? RefreshToken) : Request<AuthenticateUserResponse>;