using MassTransit;
using Microsoft.AspNetCore.SignalR;
using Notification.API.Hubs;
using Shared.Core.Contracts;
using Shared.Core.Entities;

namespace Notification.API.Consumers;

public class MessageConsumer : IConsumer<Message>
{
    private readonly IHubContext<NotificationsHub> _hubContext;

    public MessageConsumer(IHubContext<NotificationsHub> hubContext)
    {
        _hubContext = hubContext;
    }

    public async Task Consume(ConsumeContext<Message> context)
    {
        await _hubContext.Clients.All.SendAsync("SendMessage", context.Message);
    }
}