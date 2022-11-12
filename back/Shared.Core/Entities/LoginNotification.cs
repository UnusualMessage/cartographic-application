namespace Shared.Core.Entities;

public class LoginNotification : Entity<LoginNotification>
{
    public string Message { get; set; } = "";
    public Guid UserId { get; set; }

    public override void Update(LoginNotification entity)
    {
        Message = entity.Message;
        UserId = entity.UserId;
    }
}