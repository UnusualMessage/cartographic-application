using Identity.Core.Entities;
using Identity.Core.Interfaces.Enums;
using Identity.Infrastructure.Context.Configuration;
using Microsoft.EntityFrameworkCore;
using Npgsql;

namespace Identity.Infrastructure.Context;

public class IdentityContext : DbContext
{
    static IdentityContext()
    {
    }

    public IdentityContext(DbContextOptions options) : base(options)
    {
        var dataSourceBuilder =
            new NpgsqlDataSourceBuilder(
                "Host=localhost;Port=5432;Database=identity;Username=postgres;Password=20102001");
        dataSourceBuilder.MapEnum<Roles>();
        using var dataSource = dataSourceBuilder.Build();
    }

    public DbSet<User>? Users { get; set; }
    public DbSet<RefreshToken>? RefreshTokens { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.HasPostgresEnum<Roles>();

        modelBuilder.ApplyConfiguration(new UserConfiguration());
        modelBuilder.ApplyConfiguration(new RefreshTokenConfiguration());
    }
}