using Identity.Core.Interfaces.Services;
using BC = BCrypt.Net.BCrypt;

namespace Identity.Application.Services;

public class PasswordHasher : IPasswordHasher
{
    public string HashPassword(string password)
    {
        return BC.HashPassword(password);
    }

    public bool VerifyPassword(string providedPassword, string hashedPassword)
    {
        return BC.Verify(providedPassword, hashedPassword);
    }
}