using Identity.Application.Responses;
using MassTransit.Mediator;

namespace Identity.Application.Requests.Queries;

public record GetUsers : Request<UsersResponse>;