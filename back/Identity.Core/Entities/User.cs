using Identity.Core.Interfaces.Enums;
using Shared.Core.Entities;
using Shared.Core.Exceptions;

namespace Identity.Core.Entities;

public class User : Entity<User>
{
    public string Login { get; set; } = string.Empty;
    public string Password { get; set; } = string.Empty;
    
    public bool Admin { get; set; }
    public bool Moderator { get; set; }
    public bool Monitor { get; set; }

    public ICollection<RefreshToken> RefreshTokens { get; set; } = new List<RefreshToken>();

    public Roles GetRoles()
    {
        Roles roles = 0;

        if (Admin)
        {
            roles |= Roles.Admin;
        }
        
        if (Moderator)
        {
            roles |= Roles.Moderator;
        }
        
        if (Monitor)
        {
            roles |= Roles.Monitor;
        }

        return roles;
    }

    public void SetRoles(Roles role)
    {
        if (role.HasFlag(Roles.Admin))
        {
            Admin = true;
        }
        
        if (role.HasFlag(Roles.Moderator))
        {
            Moderator = true;
        }
        
        if (role.HasFlag(Roles.Monitor))
        {
            Monitor = true;
        }
    }

    public override void Update(User user)
    {
        Login = user.Login;
        Password = user.Password;
        Admin = user.Admin;
        Moderator = user.Moderator;
        Monitor = user.Monitor;
    }
}