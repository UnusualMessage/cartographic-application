namespace Identity.Application.Responses;

public record UserResponse(Guid Id, string? Login);

public record UsersResponse(IEnumerable<UserResponse> Users);