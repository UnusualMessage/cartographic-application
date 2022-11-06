using Identity.Core.Interfaces.Repositories;
using Identity.Infrastructure.Context;
using Identity.Infrastructure.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Identity.Infrastructure.Extensions;

public static class DatabaseConfiguration
{
    public static void AddPostgresql(this IServiceCollection services, IConfiguration configuration)
    {
        var connection = configuration["ConnectionStrings:Connection"];
        services.AddDbContext<IdentityContext>(options => options.UseNpgsql(connection));
    }

    public static void AddRepositories(this IServiceCollection services)
    {
        services.AddScoped<IUserRepository, UserRepository>();
        services.AddScoped<IRefreshTokenRepository, RefreshTokenRepository>();
    }

}