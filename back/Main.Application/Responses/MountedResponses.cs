using Shared.Core.Responses;

namespace Main.Application.Responses;

public record MountedResponse(Guid Id, string Name, float Width, float? Offset, OrganizationResponse Organization,
    DepartmentResponse? Department) : Response(Id);

public record MountedsResponse(IEnumerable<MountedResponse> Items);