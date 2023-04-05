using Main.Application.Responses;
using MassTransit.Mediator;
using Sieve.Models;

namespace Main.Application.Requests.Queries;

public record GetGeozones(SieveModel Model) : Request<GeozonesResponse>;

public record GetGeozone(Guid Id) : Request<GeozoneResponse>;