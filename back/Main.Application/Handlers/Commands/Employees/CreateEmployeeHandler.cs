using AutoMapper;
using Main.Application.Requests.Commands;
using Main.Application.Responses;
using Main.Core.Entities;
using Main.Core.Interfaces.Repositories;
using MassTransit.Mediator;

namespace Main.Application.Handlers.Commands.Employees;

public class CreateEmployeeHandler : MediatorRequestHandler<CreateEmployee, EmployeeResponse>
{
    private readonly IEmployeeRepository _employeeRepository;
    private readonly IMapper _mapper;

    public CreateEmployeeHandler(IEmployeeRepository repository, IMapper mapper)
    {
        _employeeRepository = repository;
        _mapper = mapper;
    }
    
    protected override async Task<EmployeeResponse> Handle(CreateEmployee request, CancellationToken cancellationToken)
    {
        return _mapper.Map<EmployeeResponse>(await _employeeRepository.AddAsync(_mapper.Map<Employee>(request)));
    }
}