namespace Shared.Core.Contracts;

public record Message
{
    public string? Title { get; set; }
    public string? Text { get; set; }
    public Guid TargetUserId { get; set; }
}