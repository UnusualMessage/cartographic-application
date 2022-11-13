using System.ComponentModel.DataAnnotations;
using Main.Application.Responses;
using MassTransit.Mediator;

namespace Main.Application.Requests.Commands;

public record CreateEmployee([Required] string FirstName, string? SecondName, string? Patronymic, [Required] Guid OrganizationId,
    [Required] Guid PostId) : Request<EmployeeResponse>;
    
public record UpdateEmployee([Required] Guid Id, [Required] string FirstName, string? SecondName, string? Patronymic, 
    [Required] Guid OrganizationId, [Required] Guid PostId) : Request<EmployeeResponse>;
    
public record DeleteEmployee([Required] Guid Id) : Request<EmployeeResponse>;