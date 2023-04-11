using Shared.Core.Responses;

namespace Main.Application.Responses;

public record EquipmentResponse(Guid Id, string Name, string Status, OrganizationResponse Organization,
    DepartmentResponse? Department, EquipmentTypeResponse EquipmentType,
    EquipmentPointResponse? Feature) : Response(Id);

public record FlatEquipmentResponse(Guid Id, string Name, string Status) : Response(Id);

public record EquipmentsResponse(IEnumerable<EquipmentResponse> Items);