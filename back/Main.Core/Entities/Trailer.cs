using Shared.Core.Entities;

namespace Main.Core.Entities;

public class Trailer : Entity<Trailer>
{
    public required string Title { get; set; }

    public Organization? Organization { get; set; }
    public required Guid OrganizationId { get; set; }

    public Department? Department { get; set; }
    public Guid? DepartmentId { get; set; }

    public override void Update(Trailer entity)
    {
        Title = entity.Title;
        
        OrganizationId = entity.OrganizationId;
        DepartmentId = entity.DepartmentId;
    }
}