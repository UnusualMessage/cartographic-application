using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using Identity.Core.Entities;
using Identity.Core.Interfaces.Enums;
using Identity.Core.Interfaces.Services;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Shared.Core.Settings;

namespace Identity.Application.Services;

public class JwtService : ITokenService
{
    private readonly IOptions<JwtSettings> _jwtSettings;

    public JwtService(IOptions<JwtSettings> settings)
    {
        _jwtSettings = settings;
    }

    public AccessToken GenerateAccessToken(User user)
    {
        JwtSecurityTokenHandler tokenHandler = new();
        var key = Encoding.UTF8.GetBytes(_jwtSettings.Value.Key!);

        var roleClaims = new List<Claim>();

        if (user.Roles.HasFlag(Roles.Admin)) AddRoleClaim(roleClaims, "Admin");
        if (user.Roles.HasFlag(Roles.Moderator)) AddRoleClaim(roleClaims, "Moderator");
        if (user.Roles.HasFlag(Roles.Monitor)) AddRoleClaim(roleClaims, "Monitor");
        if (user.Roles.HasFlag(Roles.Guest)) AddRoleClaim(roleClaims, "Guest");

        ClaimsIdentity claimsIdentity = new(new[]
        {
            new Claim(ClaimTypes.NameIdentifier, user.Id.ToString())
        });

        claimsIdentity.AddClaims(roleClaims);

        SigningCredentials signingCredentials = new(new SymmetricSecurityKey(key),
            SecurityAlgorithms.HmacSha256Signature);

        SecurityTokenDescriptor tokenDescriptor = new()
        {
            Subject = claimsIdentity,
            Issuer = _jwtSettings.Value.Issuer,
            Audience = _jwtSettings.Value.Audience,
            Expires = DateTime.Now.AddMinutes(_jwtSettings.Value.Expires),
            SigningCredentials = signingCredentials
        };

        var token = tokenHandler.CreateToken(tokenDescriptor);

        return new AccessToken
        {
            Token = tokenHandler.WriteToken(token)
        };
    }

    public RefreshToken GenerateRefreshToken(string ipAddress)
    {
        var randomBytes = new byte[64];
        string token;

        using (var rng = RandomNumberGenerator.Create())
        {
            rng.GetBytes(randomBytes);
            token = Convert.ToBase64String(randomBytes);
        }

        return new RefreshToken
        {
            Token = token,
            Expires = DateTime.UtcNow.AddDays(7),
            Created = DateTime.UtcNow,
            CreatedByIp = ipAddress
        };
    }

    private static void AddRoleClaim(ICollection<Claim> claims, string name)
    {
        claims.Add(new Claim(ClaimTypes.Role, name));
    }
}