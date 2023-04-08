using Main.Core.Entities;
using Main.Core.Interfaces.Repositories;
using Main.Infrastructure.Context;
using Main.Infrastructure.Repositories.Base;
using Microsoft.EntityFrameworkCore;

namespace Main.Infrastructure.Repositories;

public class SpeedRepository : Repository<Speed>, ISpeedRepository
{
    public SpeedRepository(ApplicationContext context) : base(context)
    {
    }

    public override async Task<Speed?> GetByIdAsync(Guid id)
    {
        return await IncludeAll()
            .FirstOrDefaultAsync(e => e.Id == id);
    }

    public override async Task<IEnumerable<Speed>> GetAllAsync()
    {
        return await IncludeAll()
            .ToListAsync();
    }

    private IQueryable<Speed> IncludeAll()
    {
        return Context.Set<Speed>()
            .Include(e => e.Organization)
            .Include(e => e.Department);
    }
}