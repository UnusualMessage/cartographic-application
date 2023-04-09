namespace Main.Application.Responses;

public record EquipmentResponse(Guid Id, string Name, string Status, OrganizationResponse Organization,
    DepartmentResponse? Department, EquipmentTypeResponse EquipmentType);
public record EquipmentsResponse(IEnumerable<EquipmentResponse> Items);