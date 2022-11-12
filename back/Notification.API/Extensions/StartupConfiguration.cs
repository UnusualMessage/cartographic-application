using MassTransit;
using MassTransit.SignalR;
using Notification.API.Consumers;
using Notification.API.Hubs;

namespace Notification.API.Extensions;

public static class StartupConfiguration
{
    public static void AddMicroservice(this IServiceCollection services)
    {
        services.AddHealthChecks();
        services.AddSignalR();
        
        services.AddMassTransit(x =>
        {
            x.AddDelayedMessageScheduler();
            x.SetKebabCaseEndpointNameFormatter();

            x.AddSignalRHub<UserNotificationHub>();

            x.UsingRabbitMq((context, cfg) =>
            {
                cfg.Host("localhost", "/", h =>
                {
                    h.Username("guest");
                    h.Password("guest");
                });
                
                cfg.ConfigureEndpoints(context);
            });
            
            x.AddConsumersFromNamespaceContaining<UserNotificationConsumer>();
        });
        
    }
}