using Microsoft.AspNetCore.SignalR;

namespace Notification.API.Hubs;

public class NotificationHub : Hub
{
    public async Task SendMessage(string message)
    {
        await Clients.All.SendAsync("broadcastMessage", message);
    }
}