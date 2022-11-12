using System.Text.Json.Serialization;

namespace Identity.Application.Responses.Auth;

public class AuthenticateUserResponse
{
    public string? AccessToken { get; set; }

    [JsonIgnore]
    public string? RefreshToken { get; set; }
}