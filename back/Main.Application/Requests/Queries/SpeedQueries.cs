using Main.Application.Responses;
using MassTransit.Mediator;
using Sieve.Models;

namespace Main.Application.Requests.Queries;

public record GetSpeeds(SieveModel Model) : Request<SpeedsResponse>;

public record GetSpeed(Guid Id) : Request<SpeedResponse>;