using AutoMapper;
using Main.Application.Requests.Commands;
using Main.Application.Responses;
using Main.Core.Entities.Geometry;
using Main.Core.Interfaces.Repositories;
using MassTransit.Mediator;

namespace Main.Application.Handlers.Commands.EquipmentPoints;

public class UpdateEquipmentPointHandler : MediatorRequestHandler<UpdateEquipmentPoint, EquipmentPointResponse>
{
    private readonly IEquipmentPointRepository _repository;
    private readonly IMapper _mapper;

    public UpdateEquipmentPointHandler(IEquipmentPointRepository repository, IMapper mapper)
    {
        _repository = repository;
        _mapper = mapper;
    }

    protected override async Task<EquipmentPointResponse> Handle(UpdateEquipmentPoint request, CancellationToken token)
    {
        return _mapper.Map<EquipmentPointResponse>(await _repository.UpdateAsync(_mapper.Map<EquipmentPoint>(request)));
    }
}