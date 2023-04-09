using NetTopologySuite.Geometries;
using Shared.Core.Entities;

namespace Main.Core.Entities.Geometry;

public class EquipmentPoint : Entity<EquipmentPoint>
{
    public required Point Geometry { get; set; }

    public Equipment? Equipment { get; set; }
    public Guid? EquipmentId { get; set; }

    public override void Update(EquipmentPoint entity)
    {
        Id = entity.Id;
        EquipmentId = entity.EquipmentId;
        Geometry = (Point)entity.Geometry.Copy();
    }
}