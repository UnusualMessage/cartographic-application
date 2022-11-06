using Newtonsoft.Json;

namespace Identity.Application.Responses.UserResponses;

public class AuthenticateUserResponse
{
    public string? AccessToken { get; set; }

    [JsonIgnore]
    public string? RefreshToken { get; set; }
}