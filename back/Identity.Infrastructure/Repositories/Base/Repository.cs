using Shared.Core.Entities;
using Shared.Core.Interfaces;
using Identity.Infrastructure.Context;
using Microsoft.EntityFrameworkCore;

namespace Identity.Infrastructure.Repositories.Base;

public abstract class Repository<T> : IRepository<T> where T : Entity<T>
{
    protected readonly IdentityContext Context;

    protected Repository(IdentityContext context)
    {
        Context = context;
    }

    public virtual async Task<T?> AddAsync(T entity)
    {
        try
        {
            await Context.Set<T>().AddAsync(entity);
            await Context.SaveChangesAsync();

            return await GetByIdAsync(entity.Id);
        }
        catch (DbUpdateException)
        {
            throw new InvalidCastException();
        }
    }

    public virtual async Task<T?> DeleteByIdAsync(Guid id)
    {
        try
        {
            var entity = await GetByIdAsync(id);

            if (entity == null)
            {
                return null;
            }
        
            Context.Set<T>().Remove(entity);
            await Context.SaveChangesAsync();

            return entity;
        }
        catch (DbUpdateException)
        {
            throw new InvalidOperationException();
        }
    }

    public virtual async Task<IEnumerable<T>> GetAllAsync()
    {
        return await Context.Set<T>().ToListAsync();
    }

    public virtual async Task<T?> GetByIdAsync(Guid id)
    {
        return await Context.Set<T>().FindAsync(id);
    }

    public virtual async Task<T?> UpdateAsync(T entity)
    {
        try
        {
            var selected = await Context.Set<T>().FirstOrDefaultAsync(e => e.Id == entity.Id);

            selected?.Update(entity);

            await Context.SaveChangesAsync();

            return await GetByIdAsync(entity.Id);
        }
        catch (DbUpdateException)
        {
            throw new InvalidOperationException();
        }   
    }
}