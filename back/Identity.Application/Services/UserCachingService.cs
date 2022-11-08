using System.Text;
using Identity.Core.Entities;
using Identity.Core.Interfaces.Repositories;
using Identity.Core.Interfaces.Services;
using Microsoft.Extensions.Caching.Distributed;
using Newtonsoft.Json;

namespace Identity.Application.Services;

public class UserCachingService : ICachingService<User>
{
    private readonly IDistributedCache _cache;
    private readonly IUserRepository _repository;
    
    public UserCachingService(IDistributedCache cache, IUserRepository repository)
    {
        _cache = cache;
        _repository = repository;
    }
    
    public async Task<User?> Cache(string key)
    {
        User? user;
        var cachedUser = await _cache.GetAsync(key);

        if (cachedUser is not null)
        {
            var serializedUser = Encoding.UTF8.GetString(cachedUser);
            user = JsonConvert.DeserializeObject<User>(serializedUser);
        }
        else
        {
            user = await _repository.GetUserByTokenAsync(key);
            var serializedUser = JsonConvert.SerializeObject(user);
            cachedUser = Encoding.UTF8.GetBytes(serializedUser);
            
            await _cache.SetAsync(key, cachedUser,
                new DistributedCacheEntryOptions()
                    .SetSlidingExpiration(TimeSpan.FromMinutes(5))
                    .SetAbsoluteExpiration(DateTime.Now.AddHours(6)));
        }

        return user;
    }
}