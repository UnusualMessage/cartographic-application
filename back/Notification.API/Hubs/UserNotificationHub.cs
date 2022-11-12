using Microsoft.AspNetCore.SignalR;

namespace Notification.API.Hubs;

public class UserNotificationHub : Hub
{
    public async Task SendMessage(string message)
    {
        await Clients.All.SendAsync("broadcastMessage", message);
    }
}