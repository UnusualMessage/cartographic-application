using NetTopologySuite.Geometries;
using Shared.Core.Entities;

namespace Main.Core.Entities.Geometry;

public class EquipmentPoint : Entity<EquipmentPoint>
{
    public required Point Geometry { get; set; }

    public Equipment? Equipment { get; set; }

    public override void Update(EquipmentPoint entity)
    {
        Id = entity.Id;
        Geometry = (Point)entity.Geometry.Copy();
    }
}