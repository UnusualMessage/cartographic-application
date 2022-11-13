using System.ComponentModel.DataAnnotations;
using Main.Application.Responses;
using MassTransit.Mediator;

namespace Main.Application.Requests.Commands;

public record CreateOrganization([Required] string Title) : Request<OrganizationResponse>;
    
public record UpdateOrganization([Required] Guid Id, [Required] string Title) : Request<OrganizationResponse>;
    
public record DeleteOrganization([Required] Guid Id) : Request<OrganizationResponse>;