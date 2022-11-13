using Main.Infrastructure.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Main.Infrastructure.Extensions;

public static class DatabaseConfiguration
{
    public static void AddPostgresql(this IServiceCollection services, IConfiguration configuration)
    {
        var connection = configuration["ConnectionStrings:Connection"];
        services.AddDbContext<ApplicationContext>(options => options.UseNpgsql(connection));
    }

    public static void AddRepositories(this IServiceCollection services)
    {
    }
}