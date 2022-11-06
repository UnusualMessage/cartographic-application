using Common.Core.Interfaces;

namespace Common.Core.Entites;

public abstract class Entity<T> : IUpdatable<T> where T : Entity<T>
{
    public Guid Id { get; set; }
    public abstract void Update(T entity);
}