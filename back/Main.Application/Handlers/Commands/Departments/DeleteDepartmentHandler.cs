using AutoMapper;
using Main.Application.Requests.Commands;
using Main.Application.Responses;
using Main.Core.Interfaces.Repositories;
using MassTransit.Mediator;

namespace Main.Application.Handlers.Commands.Departments;

public class DeleteDepartmentHandler : MediatorRequestHandler<DeleteDepartment, DepartmentResponse>
{
    private readonly IDepartmentRepository _departmentRepository;
    private readonly IMapper _mapper;

    public DeleteDepartmentHandler(IDepartmentRepository repository, IMapper mapper)
    {
        _departmentRepository = repository;
        _mapper = mapper;
    }

    protected override async Task<DepartmentResponse> Handle(DeleteDepartment request,
        CancellationToken cancellationToken)
    {
        return _mapper.Map<DepartmentResponse>(await _departmentRepository.DeleteByIdAsync(request.Id));
    }
}