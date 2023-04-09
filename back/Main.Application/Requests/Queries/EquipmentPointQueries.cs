using Main.Application.Responses;
using MassTransit.Mediator;
using Sieve.Models;

namespace Main.Application.Requests.Queries;

public record GetEquipmentPoints(SieveModel Model) : Request<EquipmentPointsResponse>;

public record GetEquipmentPoint(Guid Id) : Request<EquipmentPointResponse>;