using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace Identity.Infrastructure.Context;

public class IdentityContextFactory : IDesignTimeDbContextFactory<IdentityContext>
{
    public IdentityContext CreateDbContext(string[] args)
    {
        DbContextOptionsBuilder optionsBuilder = new();

        optionsBuilder.UseNpgsql("Host=localhost;Port=5432;Database=identity;Username=postgres;Password=20102001");

        return new IdentityContext(optionsBuilder.Options);
    }
}