using Main.Core.Entities.Geometry;
using Main.Core.Interfaces.Repositories;
using Main.Infrastructure.Context;
using Main.Infrastructure.Repositories.Base;
using Microsoft.EntityFrameworkCore;

namespace Main.Infrastructure.Repositories;

public class GeozonePolygonRepository : Repository<GeozonePolygon>, IGeozonePolygonRepository
{
    public GeozonePolygonRepository(ApplicationContext context) : base(context)
    {
    }

    public override async Task<GeozonePolygon?> GetByIdAsync(Guid id)
    {
        return await IncludeAll()
            .FirstOrDefaultAsync(e => e.Id == id);
    }

    public override async Task<IEnumerable<GeozonePolygon>> GetAllAsync()
    {
        return await IncludeAll()
            .ToListAsync();
    }

    private IQueryable<GeozonePolygon> IncludeAll()
    {
        return Context.Set<GeozonePolygon>()
            .Include(e => e.Geozone)
            .Include(e => e.Department)
            .Include(e => e.Organization);
    }
}