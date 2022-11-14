using System.ComponentModel.DataAnnotations;
using Identity.Application.Responses;
using MassTransit.Mediator;

namespace Identity.Application.Requests.Commands;

public record AuthenticateUser
    ([Required] string Login, [Required] string Password, string? IpAddress) : Request<AuthenticateUserResponse>;

public record RefreshUser(string? RefreshToken, string? IpAddress) : Request<AuthenticateUserResponse>;

public record RevokeUser(string? RefreshToken, string? IpAddress) : Request<RevokeUserResponse>;