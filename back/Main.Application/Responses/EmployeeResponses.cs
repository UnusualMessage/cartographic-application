using Shared.Core.Responses;

namespace Main.Application.Responses;

public record EmployeeResponse(Guid Id, string FirstName, string? SecondName, string? Patronymic, string? Phone,
    string? Email, DateOnly? BirthDate, string? DriverCard,
    OrganizationResponse Organization, DepartmentResponse? Department, PostsResponse Post) : Response(Id);

public record EmployeesResponse(IEnumerable<EmployeeResponse> Items); 