using System.Text.Json.Serialization;

namespace Identity.Application.Responses;

public record AuthenticateUserResponse(string? AccessToken, [property: JsonIgnore] string? RefreshToken);

public record RevokeUserResponse(bool Revoked);