using System.ComponentModel.DataAnnotations;
using Identity.Application.Responses.User;
using MediatR;

namespace Identity.Application.Requests.Commands.User;

public class RegisterUser : IRequest<AuthenticateUserResponse>
{
    [Required]
    public string Login { get; set; } = string.Empty;

    [Required]
    public string Password { get; set; } = string.Empty;

    public string? IpAddress { get; set; }
}