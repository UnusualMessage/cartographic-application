using Main.Core.Entities;
using Main.Infrastructure.Context;
using Main.Infrastructure.Repositories.Base;
using Microsoft.EntityFrameworkCore;

namespace Main.Infrastructure.Repositories;

public class EquipmentTypeRepository : Repository<EquipmentType>
{
    public EquipmentTypeRepository(ApplicationContext context) : base(context)
    {
    }

    public override async Task<EquipmentType?> GetByIdAsync(Guid id)
    {
        return await IncludeAll()
            .FirstOrDefaultAsync(e => e.Id == id);
    }

    public override async Task<IEnumerable<EquipmentType>> GetAllAsync()
    {
        return await IncludeAll()
            .ToListAsync();
    }

    private IQueryable<EquipmentType> IncludeAll()
    {
        return Context.Set<EquipmentType>()
            .Include(e => e.Organization)
            .Include(e => e.Department);
    }
}