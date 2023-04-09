using NetTopologySuite.Geometries;
using Shared.Core.Entities;

namespace Main.Core.Entities.Geometry;

public class GeozonePolygon : Entity<GeozonePolygon>
{
    public required Polygon Geometry { get; set; }

    public Geozone? Geozone { get; set; }
    public Guid? GeozoneId { get; set; }

    public override void Update(GeozonePolygon entity)
    {
        Id = entity.Id;
        GeozoneId = entity.GeozoneId;
        Geometry = (Polygon)entity.Geometry.Copy();
    }
}