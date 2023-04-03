using AutoMapper;
using Main.Application.Requests.Commands;
using Main.Application.Responses;
using Main.Core.Entities;
using Main.Core.Interfaces.Repositories;
using MassTransit.Mediator;

namespace Main.Application.Handlers.Commands.Departments;

public class CreateDepartmentHandler : MediatorRequestHandler<CreateDepartment, DepartmentResponse>
{
    private readonly IDepartmentRepository _departmentRepository;
    private readonly IMapper _mapper;

    public CreateDepartmentHandler(IDepartmentRepository repository, IMapper mapper)
    {
        _departmentRepository = repository;
        _mapper = mapper;
    }

    protected override async Task<DepartmentResponse> Handle(CreateDepartment request,
        CancellationToken cancellationToken)
    {
        return _mapper.Map<DepartmentResponse>(await _departmentRepository.AddAsync(_mapper.Map<Department>(request)));
    }
}