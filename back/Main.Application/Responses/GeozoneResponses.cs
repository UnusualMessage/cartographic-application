using Main.Core.Properties;
using Shared.Core.Responses;

namespace Main.Application.Responses;

public record GeozoneResponse
(Guid Id, string Title, OrganizationResponse Organization,
    DepartmentResponse? Department) : Response(Id)
{
    public GeozoneFeature Feature { get; set; }
}

public record GeozonesResponse(IEnumerable<GeozoneResponse> Geozones);