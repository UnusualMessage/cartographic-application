using AutoMapper;
using Main.Application.Requests.Queries;
using Main.Application.Responses;
using Main.Core.Interfaces.Repositories;
using MassTransit.Mediator;

namespace Main.Application.Handlers.Queries.Departments;

public class GetDepartmentHandler : MediatorRequestHandler<GetDepartment, DepartmentResponse>
{
    private readonly IDepartmentRepository _repository;
    private readonly IMapper _mapper;

    public GetDepartmentHandler(IDepartmentRepository repository, IMapper mapper)
    {
        _repository = repository;
        _mapper = mapper;
    }

    protected override async Task<DepartmentResponse> Handle(GetDepartment request, CancellationToken token)
    {
        return _mapper.Map<DepartmentResponse>(await _repository.GetByIdAsync(request.Id));
    }
}