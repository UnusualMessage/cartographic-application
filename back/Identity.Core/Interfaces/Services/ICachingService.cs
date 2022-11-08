namespace Identity.Core.Interfaces.Services;

public interface ICachingService<T>
{
    public Task<T?> Cache(string key);
}