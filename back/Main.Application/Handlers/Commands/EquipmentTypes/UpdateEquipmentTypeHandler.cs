using AutoMapper;
using Main.Application.Requests.Commands;
using Main.Application.Responses;
using Main.Core.Entities;
using Main.Core.Interfaces.Repositories;
using MassTransit.Mediator;

namespace Main.Application.Handlers.Commands.EquipmentTypes;

public class UpdateEquipmentTypeHandler : MediatorRequestHandler<UpdateEquipmentType, EquipmentTypeResponse>
{
    private readonly IEquipmentTypeRepository _repository;
    private readonly IMapper _mapper;

    public UpdateEquipmentTypeHandler(IEquipmentTypeRepository repository, IMapper mapper)
    {
        _repository = repository;
        _mapper = mapper;
    }

    protected override async Task<EquipmentTypeResponse> Handle(UpdateEquipmentType request, CancellationToken token)
    {
        return _mapper.Map<EquipmentTypeResponse>(await _repository.UpdateAsync(_mapper.Map<EquipmentType>(request)));
    }
}