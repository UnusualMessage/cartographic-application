using System.ComponentModel.DataAnnotations;
using Identity.Application.Responses;
using MediatR;

namespace Identity.Application.Requests.Commands;

public record AuthenticateUser
    ([Required] string Login, [Required] string Password, string? IpAddress) : IRequest<AuthenticateUserResponse>;

public record RefreshUser(string? RefreshToken, string? IpAddress) : IRequest<AuthenticateUserResponse>;

public record RevokeUser(string? RefreshToken, string? IpAddress) : IRequest<RevokeUserResponse>;