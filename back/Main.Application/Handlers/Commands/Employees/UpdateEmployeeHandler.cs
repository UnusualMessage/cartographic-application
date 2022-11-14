using AutoMapper;
using Main.Application.Requests.Commands;
using Main.Application.Responses;
using Main.Core.Entities;
using Main.Core.Interfaces.Repositories;
using MassTransit.Mediator;

namespace Main.Application.Handlers.Commands.Employees;

public class UpdateEmployeeHandler : MediatorRequestHandler<UpdateEmployee, EmployeeResponse>
{
    private readonly IEmployeeRepository _employeeRepository;
    private readonly IMapper _mapper;

    public UpdateEmployeeHandler(IEmployeeRepository repository, IMapper mapper)
    {
        _employeeRepository = repository;
        _mapper = mapper;
    }
    
    protected override async Task<EmployeeResponse> Handle(UpdateEmployee request, CancellationToken cancellationToken)
    {
        return _mapper.Map<EmployeeResponse>(await _employeeRepository.UpdateAsync(_mapper.Map<Employee>(request)));
    }
}