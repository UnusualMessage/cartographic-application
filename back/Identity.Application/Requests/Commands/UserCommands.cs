using System.ComponentModel.DataAnnotations;
using Identity.Application.Responses;
using Identity.Core.Interfaces.Enums;
using MassTransit.Mediator;

namespace Identity.Application.Requests.Commands;

public record CreateUser([Required] string Login, [Required] string Password, Roles Role) 
    : Request<UserResponse>;