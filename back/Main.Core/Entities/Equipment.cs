using NetTopologySuite.Geometries;
using Shared.Core.Entities;

namespace Main.Core.Entities;

public class Equipment : Entity<Equipment>
{
    public string Name { get; set; } = string.Empty;

    public Point? Location { get; set; }

    public override void Update(Equipment entity)
    {
        Name = entity.Name;
        Location = entity.Location;
    }
}