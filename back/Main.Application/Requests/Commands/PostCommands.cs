using System.ComponentModel.DataAnnotations;
using Main.Application.Responses;
using MassTransit.Mediator;

namespace Main.Application.Requests.Commands;

public record CreatePost([Required] string Title) : Request<PostResponse>;
    
public record UpdatePost([Required] Guid Id, [Required] string Title) : Request<PostResponse>;
    
public record DeletePost([Required] Guid Id) : Request<PostResponse>;