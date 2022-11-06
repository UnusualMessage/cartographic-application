using Common.Core.Entites;

namespace Common.Core.Interfaces;

public interface IUpdatable<in T> where T : Entity<T>
{
    public void Update(T entity);
}