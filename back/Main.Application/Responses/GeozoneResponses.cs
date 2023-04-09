using Shared.Core.Responses;

namespace Main.Application.Responses;

public record GeozoneResponse
(Guid Id, string Title, OrganizationResponse Organization,
    DepartmentResponse? Department, GeozonePolygonResponse? Feature) : Response(Id);

public record GeozonesResponse(IEnumerable<GeozoneResponse> Items);