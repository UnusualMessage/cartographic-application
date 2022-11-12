using Shared.Core.Interfaces;
using Identity.Core.Entities;

namespace Identity.Core.Interfaces.Repositories;

public interface IUserRepository : IRepository<User>
{
    public Task<User?> GetUserByLoginAsync(string name);

    public Task<User?> GetUserByTokenAsync(string token);
}