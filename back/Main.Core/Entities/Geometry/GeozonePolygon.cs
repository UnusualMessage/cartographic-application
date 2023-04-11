using NetTopologySuite.Geometries;
using Shared.Core.Entities;

namespace Main.Core.Entities.Geometry;

public class GeozonePolygon : Entity<GeozonePolygon>
{
    public required Polygon Geometry { get; set; }

    public Geozone? Geozone { get; set; }

    public Organization? Organization { get; set; }
    public required Guid OrganizationId { get; set; }

    public Department? Department { get; set; }
    public Guid? DepartmentId { get; set; }

    public override void Update(GeozonePolygon entity)
    {
        Id = entity.Id;
        Geometry = (Polygon)entity.Geometry.Copy();

        OrganizationId = entity.OrganizationId;
        DepartmentId = entity.DepartmentId;
    }
}