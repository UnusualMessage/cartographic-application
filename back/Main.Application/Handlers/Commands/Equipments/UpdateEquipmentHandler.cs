using AutoMapper;
using Main.Application.Requests.Commands;
using Main.Application.Responses;
using Main.Core.Entities;
using Main.Core.Interfaces.Repositories;
using MassTransit.Mediator;

namespace Main.Application.Handlers.Commands.Equipments;

public class UpdateEquipmentHandler : MediatorRequestHandler<UpdateEquipment, EquipmentResponse>
{
    private readonly IEquipmentRepository _repository;
    private readonly IMapper _mapper;

    public UpdateEquipmentHandler(IEquipmentRepository repository, IMapper mapper)
    {
        _repository = repository;
        _mapper = mapper;
    }

    protected override async Task<EquipmentResponse> Handle(UpdateEquipment request, CancellationToken token)
    {
        return _mapper.Map<EquipmentResponse>(await _repository.UpdateAsync(_mapper.Map<Equipment>(request)));
    }
}