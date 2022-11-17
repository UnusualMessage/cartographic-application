using Sieve.Attributes;

namespace Identity.Application.Responses;

public record RefreshTokenResponse(string Id, string Token, DateTime Created, string CreatedByIp, bool IsActive,
    [property: Sieve(CanFilter = true)] Guid UserId);

public record RefreshTokensResponse(IEnumerable<RefreshTokenResponse> RefreshTokens);