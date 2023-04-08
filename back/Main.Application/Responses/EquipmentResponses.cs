using Main.Core.Properties;

namespace Main.Application.Responses;

public record EquipmentResponse(Guid Id, string Name, string Status, OrganizationResponse Organization,
    DepartmentResponse? Department, EquipmentTypeResponse EquipmentType)
{
    public EquipmentFeature? Feature { get; set; }
}

public record EquipmentsResponse(IEnumerable<EquipmentResponse> Items);