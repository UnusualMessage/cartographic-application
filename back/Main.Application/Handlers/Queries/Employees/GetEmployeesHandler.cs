using AutoMapper;
using Main.Application.Requests.Queries;
using Main.Application.Responses;
using Main.Core.Interfaces.Repositories;
using MassTransit.Mediator;
using Sieve.Services;

namespace Main.Application.Handlers.Queries.Employees;

public class GetEmployeesHandler : MediatorRequestHandler<GetEmployees, EmployeesResponse>
{
    private readonly IEmployeeRepository _repository;
    private readonly ISieveProcessor _processor;
    private readonly IMapper _mapper;

    public GetEmployeesHandler(IEmployeeRepository repository, IMapper mapper, ISieveProcessor processor)
    {
        _repository = repository;
        _mapper = mapper;
        _processor = processor;
    }
    
    protected override async Task<EmployeesResponse> Handle(GetEmployees request, CancellationToken cancellationToken)
    {
        var departments = _mapper.Map<IEnumerable<EmployeeResponse>>(await _repository.GetAllAsync());
        var response = _processor.Apply(request.Model, departments.AsQueryable()).AsEnumerable();
        return new EmployeesResponse(response);
    }
}