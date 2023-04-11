using Main.Application.Responses;
using MassTransit.Mediator;
using Sieve.Models;

namespace Main.Application.Requests.Queries;

public record GetGeozonePolygons(SieveModel Model) : Request<GeozonePolygonsResponse>;

public record GetGeozonePolygon(Guid Id) : Request<GeozonePolygonResponse>;