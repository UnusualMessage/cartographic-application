using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace Main.Infrastructure.Context;

public class IdentityContextFactory : IDesignTimeDbContextFactory<ApplicationContext>
{
    public ApplicationContext CreateDbContext(string[] args)
    {
        DbContextOptionsBuilder optionsBuilder = new();

        optionsBuilder.UseNpgsql("Host=localhost;Port=5432;Database=main;Username=postgres;Password=20102001",
            builder => { builder.UseNetTopologySuite(); });

        return new ApplicationContext(optionsBuilder.Options);
    }
}