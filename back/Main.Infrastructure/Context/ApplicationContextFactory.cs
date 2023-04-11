using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace Main.Infrastructure.Context;

public class IdentityContextFactory : IDesignTimeDbContextFactory<ApplicationContext>
{
    public ApplicationContext CreateDbContext(string[] args)
    {
        DbContextOptionsBuilder optionsBuilder = new();

        optionsBuilder.UseNpgsql(
            "Host=localhost;Port=5432;Database=monitoring;Username=postgres;Password=20102001;Include Error Detail=true",
            builder => { builder.UseNetTopologySuite(); });

        return new ApplicationContext(optionsBuilder.Options);
    }
}