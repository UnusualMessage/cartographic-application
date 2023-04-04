using Main.Application.Responses;
using MassTransit.Mediator;
using Sieve.Models;

namespace Main.Application.Requests.Queries;

public record GetTrailers(SieveModel Model) : Request<TrailersResponse>;

public record GetTrailer(Guid Id) : Request<TrailerResponse>;