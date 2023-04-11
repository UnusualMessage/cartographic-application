using NetTopologySuite.Geometries;
using Shared.Core.Entities;

namespace Main.Core.Entities.Geometry;

public class EquipmentPoint : Entity<EquipmentPoint>
{
    public required Point Geometry { get; set; }
    
    public Equipment? Equipment { get; set; }

    public Organization? Organization { get; set; }
    public required Guid OrganizationId { get; set; }

    public Department? Department { get; set; }
    public Guid? DepartmentId { get; set; }

    public override void Update(EquipmentPoint entity)
    {
        Id = entity.Id;
        Geometry = (Point)entity.Geometry.Copy();

        OrganizationId = entity.OrganizationId;
        DepartmentId = entity.DepartmentId;
    }
}