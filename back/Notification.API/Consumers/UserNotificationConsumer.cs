using MassTransit;
using Microsoft.AspNetCore.SignalR;
using Notification.API.Hubs;
using Shared.Core.Entities;

namespace Notification.API.Consumers;

public class UserNotificationConsumer : IConsumer<LoginNotification>
{
    private readonly IHubContext<UserNotificationHub> _hubContext;

    public UserNotificationConsumer(IHubContext<UserNotificationHub> hubContext)
    {
        _hubContext = hubContext;
    }

    public async Task Consume(ConsumeContext<LoginNotification> context)
    {
        await _hubContext.Clients.All.SendAsync("broadcastMessage", context.Message.Message);
    }
}