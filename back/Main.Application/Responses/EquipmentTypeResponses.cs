using Shared.Core.Responses;

namespace Main.Application.Responses;

public record EquipmentTypeResponse
    (Guid Id, string Name, OrganizationResponse Organization, DepartmentResponse? Department) : Response(Id);

public record EquipmentTypesResponse(IEnumerable<EquipmentTypeResponse> Items);