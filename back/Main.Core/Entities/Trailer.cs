using Shared.Core.Entities;

namespace Main.Core.Entities;

public class Trailer : Entity<Trailer>
{
    public required string Title { get; set; }

    public override void Update(Trailer entity)
    {
        Title = entity.Title;
    }
}