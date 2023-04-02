using AutoMapper;
using Main.Application.Requests.Queries;
using Main.Application.Responses;
using Main.Core.Interfaces.Repositories;
using MassTransit.Mediator;
using Sieve.Services;

namespace Main.Application.Handlers.Queries.Departments;

public class GetDepartmentsHandler : MediatorRequestHandler<GetDepartments, DepartmentsResponse>
{
    private readonly IDepartmentRepository _repository;
    private readonly IMapper _mapper;
    private readonly ISieveProcessor _processor;

    public GetDepartmentsHandler(IDepartmentRepository repository, IMapper mapper, ISieveProcessor processor)
    {
        _repository = repository;
        _mapper = mapper;
        _processor = processor;
    }

    protected override async Task<DepartmentsResponse> Handle(GetDepartments request,
        CancellationToken cancellationToken)
    {
        var departments = _mapper.Map<IEnumerable<DepartmentResponse>>(await _repository.GetAllAsync());
        var response = _processor.Apply(request.Model, departments.AsQueryable()).AsEnumerable();
        return new DepartmentsResponse(response);
    }
}