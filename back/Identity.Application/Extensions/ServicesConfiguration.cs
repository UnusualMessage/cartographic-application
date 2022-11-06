using Identity.Application.Services;
using Identity.Core.Interfaces.Services;
using Microsoft.Extensions.DependencyInjection;

namespace Identity.Application.Extensions;

public static class ServicesConfiguration
{
    public static void AddApplicationServices(this IServiceCollection services)
    {
        services.AddSingleton<ITokenService, JwtService>();
        services.AddSingleton<IPasswordHasher, PasswordHasher>();
    }
}