using System.ComponentModel.DataAnnotations;
using Main.Application.Responses;
using MassTransit.Mediator;

namespace Main.Application.Requests.Commands;

public record CreateTrailer([Required] string Title, [Required] Guid OrganizationId,
    Guid? DepartmentId) : Request<TrailerResponse>;

public record UpdateTrailer([Required] Guid Id, [Required] string Title, [Required] Guid OrganizationId,
    Guid? DepartmentId) : Request<TrailerResponse>;

public record DeleteTrailer([Required] Guid Id) : Request<TrailerResponse>;