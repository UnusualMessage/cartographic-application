using Identity.Application.Extensions;
using Identity.Application.Handlers.Commands;
using Identity.Application.Handlers.Query;
using Identity.Infrastructure.Extensions;
using MassTransit;
using Shared.Configuration.Extensions;

namespace Identity.API.Extensions;

public static class MicroserviceConfiguration
{
    public static void AddApi(this IServiceCollection services, IConfiguration configuration)
    {
        services.ConfigureSwagger();
        services.ConfigureAuthentication(configuration);

        services.AddCors();
        services.AddODataControllers();
        
        services.AddStackExchangeRedisCache(options => { options.Configuration = "localhost:6379"; });

        services.AddHealthChecks();
        services.AddMediator(x =>
        {
            x.AddConsumersFromNamespaceContaining<Commands>();
            x.AddConsumersFromNamespaceContaining<Queries>();
        });
    }

    public static void AddApplication(this IServiceCollection services)
    {
        services.AddApplicationServices();
        services.AddMappingProfiles();
    }

    public static void AddInfrastructure(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddRepositories();
        services.AddPostgresql(configuration);
    }
}