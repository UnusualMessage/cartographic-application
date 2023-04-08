using System.ComponentModel.DataAnnotations;
using Main.Application.Responses;
using MassTransit.Mediator;

namespace Main.Application.Requests.Commands;

public record CreatePost
    ([Required] string Title, [Required] Guid OrganizationId, Guid? DepartmentId) : Request<PostResponse>;

public record UpdatePost([Required] Guid Id, [Required] string Title, [Required] Guid OrganizationId,
    Guid? DepartmentId) : Request<PostResponse>;
    
public record DeletePost([Required] Guid Id) : Request<PostResponse>;