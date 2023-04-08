using Main.Core.Entities;
using Main.Core.Interfaces.Repositories;
using Main.Infrastructure.Context;
using Main.Infrastructure.Repositories.Base;
using Microsoft.EntityFrameworkCore;

namespace Main.Infrastructure.Repositories;

public class TrailerRepository : Repository<Trailer>, ITrailerRepository
{
    public TrailerRepository(ApplicationContext context) : base(context)
    {
    }

    public override async Task<Trailer?> GetByIdAsync(Guid id)
    {
        return await IncludeAll()
            .FirstOrDefaultAsync(e => e.Id == id);
    }

    public override async Task<IEnumerable<Trailer>> GetAllAsync()
    {
        return await IncludeAll()
            .ToListAsync();
    }

    private IQueryable<Trailer> IncludeAll()
    {
        return Context.Set<Trailer>()
            .Include(e => e.Organization)
            .Include(e => e.Department);
    }
}