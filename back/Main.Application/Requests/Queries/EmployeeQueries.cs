using Main.Application.Responses;
using MassTransit.Mediator;

namespace Main.Application.Requests.Queries;

public record GetEmployees() : Request<EmployeesResponse>;

public record GetEmployee(Guid Id) : Request<EmployeeResponse>;