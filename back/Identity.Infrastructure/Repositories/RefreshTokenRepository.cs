using Identity.Core.Entities;
using Identity.Core.Interfaces.Repositories;
using Identity.Infrastructure.Context;
using Identity.Infrastructure.Repositories.Base;

namespace Identity.Infrastructure.Repositories;

public class RefreshTokenRepository : Repository<RefreshToken>, IRefreshTokenRepository
{
    public RefreshTokenRepository(IdentityContext context) : base(context)
    {
    }
}