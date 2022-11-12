using System.Text.Json.Serialization;

namespace Identity.Application.Responses;

public record AuthenticateUserResponse
{
    public string? AccessToken { get; set; }

    [JsonIgnore] public string? RefreshToken { get; set; }
}

public record RevokeUserResponse(bool Revoked);