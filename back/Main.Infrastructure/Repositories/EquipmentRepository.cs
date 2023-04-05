using Main.Core.Entities;
using Main.Core.Interfaces.Repositories;
using Main.Infrastructure.Context;
using Main.Infrastructure.Repositories.Base;
using Microsoft.EntityFrameworkCore;

namespace Main.Infrastructure.Repositories;

public class EquipmentRepository : Repository<Equipment>, IEquipmentRepository
{
    public EquipmentRepository(ApplicationContext context) : base(context)
    {
    }

    public override async Task<Equipment?> GetByIdAsync(Guid id)
    {
        return await IncludeAll()
            .FirstOrDefaultAsync(e => e.Id == id);
    }

    public override async Task<IEnumerable<Equipment>> GetAllAsync()
    {
        return await IncludeAll()
            .ToListAsync();
    }

    private IQueryable<Equipment> IncludeAll()
    {
        return Context.Set<Equipment>()
            .Include(e => e.Organization)
            .Include(e => e.Department)
            .Include(e => e.EquipmentType);
    }
}