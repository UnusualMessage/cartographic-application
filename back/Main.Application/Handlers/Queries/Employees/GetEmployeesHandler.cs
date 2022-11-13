using AutoMapper;
using Main.Application.Requests.Queries;
using Main.Application.Responses;
using Main.Core.Interfaces.Repositories;
using MassTransit.Mediator;

namespace Main.Application.Handlers.Queries.Employees;

public class GetEmployeesHandler : MediatorRequestHandler<GetEmployees, EmployeesResponse>
{
    private readonly IEmployeeRepository _employeeRepository;
    private readonly IMapper _mapper;

    public GetEmployeesHandler(IEmployeeRepository repository, IMapper mapper)
    {
        _employeeRepository = repository;
        _mapper = mapper;
    }
    
    protected override async Task<EmployeesResponse> Handle(GetEmployees request, CancellationToken cancellationToken)
    {
        var employees = _mapper.Map<IEnumerable<EmployeeResponse>>(await _employeeRepository.GetAllAsync());
        return new EmployeesResponse(employees);
    }
}