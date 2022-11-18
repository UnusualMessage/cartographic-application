using Main.Application.Responses;
using MassTransit.Mediator;
using Sieve.Models;

namespace Main.Application.Requests.Queries;

public record GetEquipments(SieveModel Model) : Request<EquipmentsResponse>;

public record GetEquipment(Guid Id) : Request<EquipmentResponse>;