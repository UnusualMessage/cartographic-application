using System.ComponentModel.DataAnnotations;
using Main.Application.Responses;
using MassTransit.Mediator;

namespace Main.Application.Requests.Commands;

public record CreateEquipment([Required] string Name, [Required] string Status,
    [Required] Guid EquipmentTypeId, [Required] Guid OrganizationId, Guid? FeatureId,
    Guid? DepartmentId) : Request<EquipmentResponse>;

public record UpdateEquipment
([Required] Guid Id, [Required] string Name, [Required] string Status,
    [Required] Guid EquipmentTypeId, [Required] Guid OrganizationId, Guid? FeatureId,
    Guid? DepartmentId) : Request<EquipmentResponse>;

public record DeleteEquipment([Required] Guid Id) : Request<EquipmentResponse>;