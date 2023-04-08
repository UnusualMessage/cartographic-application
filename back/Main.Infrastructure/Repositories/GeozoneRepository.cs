using Main.Core.Entities;
using Main.Core.Interfaces.Repositories;
using Main.Infrastructure.Context;
using Main.Infrastructure.Repositories.Base;
using Microsoft.EntityFrameworkCore;

namespace Main.Infrastructure.Repositories;

public class GeozoneRepository : Repository<Geozone>, IGeozoneRepository
{
    public GeozoneRepository(ApplicationContext context) : base(context)
    {
    }

    public override async Task<Geozone?> GetByIdAsync(Guid id)
    {
        return await IncludeAll()
            .FirstOrDefaultAsync(e => e.Id == id);
    }

    public override async Task<IEnumerable<Geozone>> GetAllAsync()
    {
        return await IncludeAll()
            .ToListAsync();
    }

    private IQueryable<Geozone> IncludeAll()
    {
        return Context.Set<Geozone>()
            .Include(e => e.Organization)
            .Include(e => e.Department);
    }
}