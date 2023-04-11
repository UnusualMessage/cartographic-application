using System.ComponentModel.DataAnnotations;
using Main.Application.Responses;
using MassTransit.Mediator;

namespace Main.Application.Requests.Commands;

public record CreateGeozonePolygon
    ([Required] string Type, [Required] PolygonGeometry Geometry, Guid? GeozoneId) : Request<GeozonePolygonResponse>;

public record UpdateGeozonePolygon
([Required] Guid Id, [Required] string Type, [Required] PolygonGeometry Geometry,
    Guid? GeozoneId) : Request<GeozonePolygonResponse>;

public record DeleteGeozonePolygon([Required] Guid Id) : Request<GeozonePolygonResponse>;