using Main.Core.Entities;
using Main.Core.Interfaces.Repositories;
using Main.Infrastructure.Context;
using Main.Infrastructure.Repositories.Base;
using Microsoft.EntityFrameworkCore;

namespace Main.Infrastructure.Repositories;

public class PostRepository : Repository<Post>, IPostRepository
{
    public PostRepository(ApplicationContext context) : base(context)
    {
    }

    public override async Task<Post?> GetByIdAsync(Guid id)
    {
        return await IncludeAll()
            .FirstOrDefaultAsync(e => e.Id == id);
    }

    public override async Task<IEnumerable<Post>> GetAllAsync()
    {
        return await IncludeAll()
            .ToListAsync();
    }

    private IQueryable<Post> IncludeAll()
    {
        return Context.Set<Post>()
            .Include(e => e.Organization)
            .Include(e => e.Department);
    }
}