using Shared.Core.Entities;

namespace Main.Core.Entities;

public class Speed : Entity<Speed>
{
    public required string Title { get; set; }
    public required int Min { get; set; }
    public required int Max { get; set; }
    public required int TimeLimit { get; set; }

    public override void Update(Speed entity)
    {
        Title = entity.Title;
        Min = entity.Min;
        Max = entity.Max;
        TimeLimit = entity.TimeLimit;
    }
}