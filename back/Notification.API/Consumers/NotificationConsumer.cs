using MassTransit;
using Microsoft.AspNetCore.SignalR;
using Notification.API.Hubs;

namespace Notification.API.Consumers;

public class NotificationConsumer : IConsumer<Core.Entities.Notification>
{
    private readonly IHubContext<NotificationHub> _hubContext;

    public NotificationConsumer(IHubContext<NotificationHub> hubContext)
    {
        _hubContext = hubContext;
    }

    public async Task Consume(ConsumeContext<Core.Entities.Notification> context)
    {
        await _hubContext.Clients.All.SendAsync("broadcastMessage", context.Message.Message);
    }
}