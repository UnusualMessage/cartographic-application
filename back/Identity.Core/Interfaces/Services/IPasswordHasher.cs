namespace Identity.Core.Interfaces.Services;

public interface IPasswordHasher
{
    public string HashPassword(string password);
    public bool VerifyPassword(string providedPassword, string hashedPassword);
}