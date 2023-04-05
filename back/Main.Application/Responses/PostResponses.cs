using Shared.Core.Responses;

namespace Main.Application.Responses;

public record PostResponse
    (Guid Id, string Title, OrganizationResponse Organization, DepartmentResponse? Department) : Response(Id);

public record PostsResponse(IEnumerable<PostResponse> Posts); 