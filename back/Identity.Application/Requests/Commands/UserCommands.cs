using System.ComponentModel.DataAnnotations;
using Identity.Application.Responses;
using MediatR;

namespace Identity.Application.Requests.Commands;

public record CreateUser([Required] string Login, [Required] string Password) : IRequest<UserResponse>;