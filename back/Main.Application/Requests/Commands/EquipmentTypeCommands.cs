using System.ComponentModel.DataAnnotations;
using Main.Application.Responses;
using MassTransit.Mediator;

namespace Main.Application.Requests.Commands;

public record CreateEquipmentType
    ([Required] string Name, [Required] Guid OrganizationId, Guid? DepartmentId) : Request<EquipmentTypeResponse>;

public record UpdateEquipmentType
([Required] Guid Id, [Required] string Name, [Required] Guid OrganizationId,
    Guid? DepartmentId) : Request<EquipmentTypeResponse>;

public record DeleteEquipmentType([Required] Guid Id) : Request<EquipmentTypeResponse>;