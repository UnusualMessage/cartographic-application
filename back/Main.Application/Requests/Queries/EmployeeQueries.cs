using Main.Application.Responses;
using MassTransit.Mediator;
using Sieve.Models;

namespace Main.Application.Requests.Queries;

public record GetEmployees(SieveModel Model) : Request<EmployeesResponse>;

public record GetEmployee(Guid Id) : Request<EmployeeResponse>;