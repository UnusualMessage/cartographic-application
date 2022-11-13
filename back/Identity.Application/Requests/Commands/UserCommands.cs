using System.ComponentModel.DataAnnotations;
using Identity.Application.Responses;
using MassTransit.Mediator;

namespace Identity.Application.Requests.Commands;

public record CreateUser([Required] string Login, [Required] string Password) : Request<UserResponse>;