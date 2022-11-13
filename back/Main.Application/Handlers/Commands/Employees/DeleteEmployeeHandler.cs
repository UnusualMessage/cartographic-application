using AutoMapper;
using Main.Application.Requests.Commands;
using Main.Application.Responses;
using Main.Core.Interfaces.Repositories;
using MassTransit.Mediator;

namespace Main.Application.Handlers.Commands.Employees;

public class DeleteEmployeeHandler : MediatorRequestHandler<DeleteEmployee, EmployeeResponse>
{
    private readonly IEmployeeRepository _employeeRepository;
    private readonly IMapper _mapper;

    public DeleteEmployeeHandler(IEmployeeRepository repository, IMapper mapper)
    {
        _employeeRepository = repository;
        _mapper = mapper;
    }
    
    protected override async Task<EmployeeResponse> Handle(DeleteEmployee request, CancellationToken cancellationToken)
    {
        return _mapper.Map<EmployeeResponse>(await _employeeRepository.DeleteByIdAsync(request.Id));
    }
}