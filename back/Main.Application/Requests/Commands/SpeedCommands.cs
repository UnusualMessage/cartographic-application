using System.ComponentModel.DataAnnotations;
using Main.Application.Responses;
using MassTransit.Mediator;

namespace Main.Application.Requests.Commands;

public record CreateSpeed
([Required] string Title, [Required] int Min, [Required] int Max,
    [Required] int TimeLimit) : Request<SpeedResponse>;

public record UpdateSpeed([Required] Guid Id, [Required] string Title, [Required] int Min, [Required] int Max,
    [Required] int TimeLimit) : Request<SpeedResponse>;

public record DeleteSpeed([Required] Guid Id) : Request<SpeedResponse>;