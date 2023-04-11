using System.ComponentModel.DataAnnotations;
using Main.Application.Responses;
using MassTransit.Mediator;

namespace Main.Application.Requests.Commands;

public record CreateGeozone
([Required] string Title, [Required] Guid OrganizationId, Guid? FeatureId,
    Guid? DepartmentId) : Request<GeozoneResponse>;

public record UpdateGeozone
([Required] Guid Id, [Required] string Title, [Required] Guid OrganizationId, Guid? FeatureId,
    Guid? DepartmentId) : Request<GeozoneResponse>;

public record DeleteGeozone([Required] Guid Id) : Request<GeozoneResponse>;