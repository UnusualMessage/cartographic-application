using Identity.Core.Entities;

namespace Identity.Core.Interfaces.Services;

public interface ITokenService
{
    public AccessToken GenerateAccessToken(User user);
    public RefreshToken GenerateRefreshToken(string ipAddress);
}