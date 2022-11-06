using Identity.Application.Extensions;
using Identity.Infrastructure.Extensions;

namespace Identity.API.Extensions;

public static class StartupConfiguration
{
    public static void ConfigureApplicationLayer(this IServiceCollection services)
    {
        services.AddApplicationServices();
        services.AddMappingProfiles();
        services.AddHandlers();
    }

    public static void ConfigureInfrastructureLayer(this IServiceCollection services)
    {
        services.AddRepositories();
    }
}