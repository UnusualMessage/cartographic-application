using Main.Core.Entities;
using Main.Core.Interfaces.Repositories;
using Main.Infrastructure.Context;
using Main.Infrastructure.Repositories.Base;
using Microsoft.EntityFrameworkCore;

namespace Main.Infrastructure.Repositories;

public class MountedRepository : Repository<Mounted>, IMountedRepository
{
    public MountedRepository(ApplicationContext context) : base(context)
    {
    }

    public override async Task<Mounted?> GetByIdAsync(Guid id)
    {
        return await IncludeAll()
            .FirstOrDefaultAsync(e => e.Id == id);
    }

    public override async Task<IEnumerable<Mounted>> GetAllAsync()
    {
        return await IncludeAll()
            .ToListAsync();
    }

    private IQueryable<Mounted> IncludeAll()
    {
        return Context.Set<Mounted>()
            .Include(e => e.Organization)
            .Include(e => e.Department);
    }
}