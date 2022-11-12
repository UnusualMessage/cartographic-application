using Shared.Core.Entities;
using Notification.Core.Interfaces;

namespace Notification.Core.Entities;

public class Notification : Entity<Notification>
{
    public string Message { get; set; } = "";
    public NotificationType Type { get; set; }
    public Guid UserId { get; set; }

    public override void Update(Notification entity)
    {
        Message = entity.Message;
        Type = entity.Type;
        UserId = entity.UserId;
    }
}