using Shared.Core.Responses;

namespace Main.Application.Responses;

public record GeozoneResponse
    (Guid Id, string Title, OrganizationResponse Organization, DepartmentResponse? Department) : Response(Id);

public record GeozonesResponse(IEnumerable<GeozoneResponse> Geozones);