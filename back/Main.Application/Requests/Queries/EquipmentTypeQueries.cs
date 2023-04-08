using Main.Application.Responses;
using MassTransit.Mediator;
using Sieve.Models;

namespace Main.Application.Requests.Queries;

public record GetEquipmentTypes(SieveModel Model) : Request<EquipmentTypesResponse>;

public record GetEquipmentType(Guid Id) : Request<EquipmentTypeResponse>;