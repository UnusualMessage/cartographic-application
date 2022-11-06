using System.Text.Json.Serialization;

namespace Identity.Application.Responses.User;

public class AuthenticateUserResponse
{
    public string? AccessToken { get; set; }

    [JsonIgnore]
    public string? RefreshToken { get; set; }
}