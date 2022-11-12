using Shared.Core.Entities;

namespace Shared.Core.Interfaces;

public interface IUpdatable<in T> where T : Entity<T>
{
    public void Update(T entity);
}