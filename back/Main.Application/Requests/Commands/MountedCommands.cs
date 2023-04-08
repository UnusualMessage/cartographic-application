using System.ComponentModel.DataAnnotations;
using Main.Application.Responses;
using MassTransit.Mediator;

namespace Main.Application.Requests.Commands;

public record CreateMounted([Required] string Title, [Required] float Width, float? Offset,
    [Required] Guid OrganizationId, Guid? DepartmentId) : Request<MountedResponse>;

public record UpdateMounted
([Required] Guid Id, [Required] string Title, [Required] float Width, float? Offset,
    [Required] Guid OrganizationId, Guid? DepartmentId) : Request<MountedResponse>;

public record DeleteMounted([Required] Guid Id) : Request<MountedResponse>;