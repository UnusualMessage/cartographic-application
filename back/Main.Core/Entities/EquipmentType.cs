using Shared.Core.Entities;

namespace Main.Core.Entities;

public class EquipmentType : Entity<EquipmentType>
{
    public required string Name { get; set; }

    public Organization? Organization { get; set; }
    public Guid OrganizationId { get; set; }

    public Department? Department { get; set; }
    public Guid? DepartmentId { get; set; }

    public override void Update(EquipmentType entity)
    {
        Name = entity.Name;
        OrganizationId = entity.OrganizationId;
        DepartmentId = entity.DepartmentId;
    }
}