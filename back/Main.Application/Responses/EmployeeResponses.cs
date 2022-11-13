using Shared.Core.Responses;

namespace Main.Application.Responses;

public record EmployeeResponse(Guid Id, string FirstName, string? SecondName, string? Patronymic, 
    OrganizationResponse Organization, PostsResponse Post) : Response(Id);

public record EmployeesResponse(IEnumerable<EmployeeResponse> Employees); 