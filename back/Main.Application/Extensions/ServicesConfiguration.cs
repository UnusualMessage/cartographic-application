using Microsoft.Extensions.DependencyInjection;
using Sieve.Services;

namespace Main.Application.Extensions;

public static class ServicesConfiguration
{
    public static void AddApplicationServices(this IServiceCollection services)
    {
        services.AddTransient<ISieveProcessor, SieveProcessor>();
    }
}