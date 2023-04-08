using Shared.Core.Entities;

namespace Main.Core.Entities;

public class Mounted : Entity<Mounted>
{
    public required string Name { get; set; }
    public required float Width { get; set; }
    public float Offset { get; set; }

    public Organization? Organization { get; set; }
    public required Guid OrganizationId { get; set; }

    public Department? Department { get; set; }
    public Guid? DepartmentId { get; set; }

    public override void Update(Mounted entity)
    {
        Name = entity.Name;
        Width = entity.Width;
        Offset = entity.Offset;
        
        OrganizationId = entity.OrganizationId;
        DepartmentId = entity.DepartmentId;
    }
}