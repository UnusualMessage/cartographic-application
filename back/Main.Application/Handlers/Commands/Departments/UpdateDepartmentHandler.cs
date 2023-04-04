using AutoMapper;
using Main.Application.Requests.Commands;
using Main.Application.Responses;
using Main.Core.Entities;
using Main.Core.Interfaces.Repositories;
using MassTransit.Mediator;

namespace Main.Application.Handlers.Commands.Departments;

public class UpdateDepartmentHandler : MediatorRequestHandler<UpdateDepartment, DepartmentResponse>
{
    private readonly IDepartmentRepository _departmentRepository;
    private readonly IMapper _mapper;

    public UpdateDepartmentHandler(IDepartmentRepository repository, IMapper mapper)
    {
        _departmentRepository = repository;
        _mapper = mapper;
    }

    protected override async Task<DepartmentResponse> Handle(UpdateDepartment request,
        CancellationToken cancellationToken)
    {
        return _mapper.Map<DepartmentResponse>(
            await _departmentRepository.UpdateAsync(_mapper.Map<Department>(request)));
    }
}