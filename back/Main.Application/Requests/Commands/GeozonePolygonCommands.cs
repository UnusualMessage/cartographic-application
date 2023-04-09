using System.ComponentModel.DataAnnotations;
using Main.Application.Responses;
using MassTransit.Mediator;

namespace Main.Application.Requests.Commands;

public record CreateGeozonePolygon([Required] PolygonFeature Feature) : Request<GeozonePolygonResponse>;

public record UpdateGeozonePolygon
    ([Required] Guid Id, [Required] PolygonFeature Feature) : Request<GeozonePolygonResponse>;

public record DeleteGeozonePolygon([Required] Guid Id) : Request<GeozonePolygonResponse>;