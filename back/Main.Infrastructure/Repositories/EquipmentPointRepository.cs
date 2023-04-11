using Main.Core.Entities.Geometry;
using Main.Core.Interfaces.Repositories;
using Main.Infrastructure.Context;
using Main.Infrastructure.Repositories.Base;
using Microsoft.EntityFrameworkCore;

namespace Main.Infrastructure.Repositories;

public class EquipmentPointRepository : Repository<EquipmentPoint>, IEquipmentPointRepository
{
    public EquipmentPointRepository(ApplicationContext context) : base(context)
    {
    }

    public override async Task<EquipmentPoint?> GetByIdAsync(Guid id)
    {
        return await IncludeAll()
            .FirstOrDefaultAsync(e => e.Id == id);
    }

    public override async Task<IEnumerable<EquipmentPoint>> GetAllAsync()
    {
        return await IncludeAll()
            .ToListAsync();
    }

    private IQueryable<EquipmentPoint> IncludeAll()
    {
        return Context.Set<EquipmentPoint>()
            .Include(e => e.Equipment)
            .Include(e => e.Department)
            .Include(e => e.Organization);
    }
}