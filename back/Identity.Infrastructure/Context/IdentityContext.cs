using Identity.Core.Entities;
using Identity.Infrastructure.Context.Configuration;
using Microsoft.EntityFrameworkCore;

namespace Identity.Infrastructure.Context;

public class IdentityContext : DbContext
{
    public DbSet<User>? Users { get; set; }
    public DbSet<RefreshToken>? RefreshTokens { get; set; }

    public IdentityContext(DbContextOptions options) : base(options)
    {
        
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfiguration(new UserConfiguration());
        modelBuilder.ApplyConfiguration(new RefreshTokenConfiguration());
    }
}