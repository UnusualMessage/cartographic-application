using AutoMapper;
using Main.Application.Requests.Commands;
using Main.Application.Responses;
using Main.Core.Entities;
using Main.Core.Interfaces.Repositories;
using MassTransit.Mediator;

namespace Main.Application.Handlers.Commands.EquipmentTypes;

public class CreateEquipmentTypeHandler : MediatorRequestHandler<CreateEquipmentType, EquipmentTypeResponse>
{
    private readonly IEquipmentTypeRepository _repository;
    private readonly IMapper _mapper;

    public CreateEquipmentTypeHandler(IEquipmentTypeRepository repository, IMapper mapper)
    {
        _repository = repository;
        _mapper = mapper;
    }

    protected override async Task<EquipmentTypeResponse> Handle(CreateEquipmentType request, CancellationToken token)
    {
        return _mapper.Map<EquipmentTypeResponse>(await _repository.AddAsync(_mapper.Map<EquipmentType>(request)));
    }
}