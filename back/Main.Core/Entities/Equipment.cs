using Main.Core.Entities.Geometry;
using Shared.Core.Entities;

namespace Main.Core.Entities;

public class Equipment : Entity<Equipment>
{
    public required string Name { get; set; }
    public required string Status { get; set; } = "no-data";

    public EquipmentPoint? Feature { get; set; }
    public Guid? FeatureId { get; set; }

    public EquipmentType? EquipmentType { get; set; }
    public required Guid EquipmentTypeId { get; set; }

    public Organization? Organization { get; set; }
    public required Guid OrganizationId { get; set; }

    public Department? Department { get; set; }
    public Guid? DepartmentId { get; set; }
    
    public override void Update(Equipment entity)
    {
        Name = entity.Name;
        Status = entity.Status;

        FeatureId = entity.FeatureId;
        EquipmentTypeId = entity.EquipmentTypeId;
        OrganizationId = entity.OrganizationId;
        DepartmentId = entity.DepartmentId;
    }
}