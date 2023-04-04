using Shared.Core.Responses;

namespace Main.Application.Responses;

public record TrailerResponse
    (Guid Id, string Title, OrganizationResponse Organization, DepartmentResponse Department) : Response(Id);

public record TrailersResponse(IEnumerable<TrailerResponse> Trailers);