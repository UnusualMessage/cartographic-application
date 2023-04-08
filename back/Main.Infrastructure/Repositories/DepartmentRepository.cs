using Main.Core.Entities;
using Main.Core.Interfaces.Repositories;
using Main.Infrastructure.Context;
using Main.Infrastructure.Repositories.Base;
using Microsoft.EntityFrameworkCore;

namespace Main.Infrastructure.Repositories;

public class DepartmentRepository : Repository<Department>, IDepartmentRepository
{
    public DepartmentRepository(ApplicationContext context) : base(context)
    {
    }

    public override async Task<Department?> GetByIdAsync(Guid id)
    {
        return await IncludeAll()
            .FirstOrDefaultAsync(e => e.Id == id);
    }

    public override async Task<IEnumerable<Department>> GetAllAsync()
    {
        return await IncludeAll()
            .ToListAsync();
    }

    private IQueryable<Department> IncludeAll()
    {
        return Context.Set<Department>()
            .Include(e => e.Organization);
    }
}