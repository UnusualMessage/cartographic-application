using Main.Application.Handlers.Commands;
using Main.Application.Handlers.Queries;
using Main.Application.Extensions;
using Main.Infrastructure.Extensions;
using MassTransit;
using Shared.Configuration.Extensions;

namespace Main.API.Extensions;

public static class MicroserviceConfiguration
{
    public static void AddApi(this IServiceCollection services, IConfiguration configuration)
    {
        services.ConfigureSwagger();
        services.ConfigureAuthentication(configuration);

        services.AddCors();
        services.AddControllers();

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