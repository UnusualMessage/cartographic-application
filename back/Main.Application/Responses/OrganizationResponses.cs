using Shared.Core.Responses;

namespace Main.Application.Responses;

public record OrganizationResponse(Guid Id, string Title) : Response(Id);

public record OrganizationsResponse(IEnumerable<OrganizationResponse> Items); 