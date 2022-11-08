using Notification.Core.Interfaces;

namespace Notification.Application.Requests;

public class SendNotification
{
    public string Message { get; set; } = "";
    public NotificationType Type { get; set; }
    public Guid UserId { get; set; }
}