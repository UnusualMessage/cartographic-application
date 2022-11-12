using Shared.Core.Interfaces;

namespace Shared.Core.Entities;

public abstract class Entity<T> : IUpdatable<T> where T : Entity<T>
{
    public Guid Id { get; set; }
    public abstract void Update(T entity);
}