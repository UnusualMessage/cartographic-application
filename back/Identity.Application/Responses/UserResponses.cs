using Identity.Core.Interfaces.Enums;
using Sieve.Attributes;

namespace Identity.Application.Responses;

public record UserResponse([property: Sieve(CanFilter = true)] Guid Id, string? Login, Roles Role);

public record UsersResponse(IEnumerable<UserResponse> Users);