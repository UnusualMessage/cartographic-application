﻿using Common.Core.Entites;

namespace Common.Core.Interfaces;

public interface IRepository<T> where T : Entity<T>
{
    public Task<IEnumerable<T>> GetAllAsync();
    public Task<T?> GetByIdAsync(Guid id);
    public Task<T?> AddAsync(T entity);
    public Task<T?> UpdateAsync(T entity);
    public Task<T?> DeleteByIdAsync(Guid id);
}