using Identity.Core.Entities;
using Identity.Core.Interfaces.Repositories;
using Identity.Infrastructure.Context;
using Identity.Infrastructure.Repositories.Base;
using Microsoft.EntityFrameworkCore;

namespace Identity.Infrastructure.Repositories;

public class UserRepository : Repository<User>, IUserRepository
{
    public UserRepository(IdentityContext context) : base(context)
    {
    }
    
    public async Task<User?> GetUserByLoginAsync(string name)
    {
        return await Context.Set<User>()
            .Include(x => x.RefreshTokens)
            .FirstOrDefaultAsync(e => e.Login == name);
    }

    public async Task<User?> GetUserByTokenAsync(string token)
    {
        return await Context.Set<User>()
            .Include(x => x.RefreshTokens)
            .FirstOrDefaultAsync(u => u.RefreshTokens.Any(t => t.Token == token));
    }
}