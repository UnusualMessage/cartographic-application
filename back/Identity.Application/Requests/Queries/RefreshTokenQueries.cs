using Identity.Application.Responses;
using MassTransit.Mediator;
using Sieve.Models;

namespace Identity.Application.Requests.Queries;

public record GetRefreshTokens(SieveModel Model) : Request<RefreshTokensResponse>;