using Microsoft.AspNetCore.SignalR;

namespace Notification.API.Hubs;

public class NotificationHub : Hub
{
    public async Task SendMessage(string user, string message)
    {
        if (string.IsNullOrEmpty(user))
        {
            await Clients.All.SendAsync("ReceiveMessageHandler", message);
        }
        else
        {
            await Clients.User(user).SendAsync("ReceiveMessageHandler", message);
        }
    }
}