using System.ComponentModel.DataAnnotations;
using Main.Application.Responses;
using MassTransit.Mediator;

namespace Main.Application.Requests.Commands;

public record CreateEquipmentPoint([Required] string Type, [Required] PointGeometry Geometry,
    PointProperties? Properties) : Request<EquipmentPointResponse>;

public record UpdateEquipmentPoint
    ([Required] Guid Id, [Required] string Type, [Required] PointGeometry Geometry) : Request<EquipmentPointResponse>;

public record DeleteEquipmentPoint([Required] Guid Id) : Request<EquipmentPointResponse>;