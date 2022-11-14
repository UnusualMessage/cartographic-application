using MassTransit;
using MassTransit.SignalR;
using Notification.API.Hubs;
using Shared.Core.Contracts;

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

            x.AddSignalRHub<NotificationsHub>();

            x.UsingRabbitMq((context, cfg) =>
            {
                cfg.Host("localhost", "/", h =>
                {
                    h.Username("guest");
                    h.Password("guest");
                });
                
                cfg.ConfigureEndpoints(context);
            });
            
            x.AddConsumersFromNamespaceContaining<Message>();
        });
    }
}