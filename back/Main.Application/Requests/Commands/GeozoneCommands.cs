using System.ComponentModel.DataAnnotations;
using Main.Application.Responses;
using Main.Core.Properties;
using MassTransit.Mediator;

namespace Main.Application.Requests.Commands;

public record CreateGeozone
([Required] string Title, GeozoneFeature Feature, [Required] Guid OrganizationId,
    Guid? DepartmentId) : Request<GeozoneResponse>;

public record UpdateGeozone
([Required] Guid Id, [Required] string Title, GeozoneFeature Feature, [Required] Guid OrganizationId,
    Guid? DepartmentId) : Request<GeozoneResponse>;

public record DeleteGeozone([Required] Guid Id) : Request<GeozoneResponse>;