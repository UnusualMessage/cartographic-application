using AutoMapper;
using Main.Application.Requests.Queries;
using Main.Application.Responses;
using Main.Core.Interfaces.Repositories;
using MassTransit.Mediator;

namespace Main.Application.Handlers.Queries.Employees;

public class GetEmployeeHandler : MediatorRequestHandler<GetEmployee, EmployeeResponse>
{
    private readonly IEmployeeRepository _employeeRepository;
    private readonly IMapper _mapper;

    public GetEmployeeHandler(IEmployeeRepository repository, IMapper mapper)
    {
        _employeeRepository = repository;
        _mapper = mapper;
    }
    
    protected override async Task<EmployeeResponse> Handle(GetEmployee request, CancellationToken cancellationToken)
    {
        return _mapper.Map<EmployeeResponse>(await _employeeRepository.GetByIdAsync(request.Id));
    }
}