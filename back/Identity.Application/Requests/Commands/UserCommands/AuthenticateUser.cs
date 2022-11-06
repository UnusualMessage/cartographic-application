using System.ComponentModel.DataAnnotations;
using Identity.Application.Responses.UserResponses;
using MediatR;

namespace Identity.Application.Requests.Commands.UserCommands;

public class AuthenticateUser : IRequest<AuthenticateUserResponse>
{
    [Required]
    public string Login { get; set; } = string.Empty;

    [Required]
    public string Password { get; set; } = string.Empty;

    public string? IpAddress { get; set; }
}