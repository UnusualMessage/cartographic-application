using Identity.Core.Interfaces.Enums;

namespace Identity.Application.Responses;

public record UserResponse(Guid Id, string? Login, Roles Roles);

public record UsersResponse(IEnumerable<UserResponse> Users);