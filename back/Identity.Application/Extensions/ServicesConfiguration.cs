using Identity.Application.Services;
using Identity.Core.Entities;
using Identity.Core.Interfaces.Services;
using Microsoft.Extensions.DependencyInjection;
using Sieve.Services;

namespace Identity.Application.Extensions;

public static class ServicesConfiguration
{
    public static void AddApplicationServices(this IServiceCollection services)
    {
        services.AddSingleton<ITokenService, JwtService>();
        services.AddSingleton<IPasswordHasher, PasswordHasher>();
        services.AddScoped<ICachingService<User>, UserCachingService>();
        services.AddTransient<ISieveProcessor, SieveProcessor>();
    }
}