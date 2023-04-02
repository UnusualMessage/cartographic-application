using Main.Application.Responses;
using MassTransit.Mediator;
using Sieve.Models;

namespace Main.Application.Requests.Queries;

public record GetDepartments(SieveModel Model) : Request<DepartmentsResponse>;

public record GetDepartment(Guid Id) : Request<DepartmentResponse>;