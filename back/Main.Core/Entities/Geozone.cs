using NetTopologySuite.Geometries;
using Shared.Core.Entities;

namespace Main.Core.Entities;

public class Geozone : Entity<Geozone>
{
    public required string Title { get; set; }

    public Polygon? Feature { get; set; }

    public Organization? Organization { get; set; }
    public required Guid OrganizationId { get; set; }

    public Department? Department { get; set; }
    public Guid? DepartmentId { get; set; }

    public override void Update(Geozone entity)
    {
        Title = entity.Title;
        Feature = (Polygon?)entity.Feature?.Copy();

        OrganizationId = entity.OrganizationId;
        DepartmentId = entity.DepartmentId;
    }
}