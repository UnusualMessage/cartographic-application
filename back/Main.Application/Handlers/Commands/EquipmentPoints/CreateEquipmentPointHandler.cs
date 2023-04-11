using AutoMapper;
using Main.Application.Requests.Commands;
using Main.Application.Responses;
using Main.Core.Entities.Geometry;
using Main.Core.Interfaces.Repositories;
using MassTransit.Mediator;

namespace Main.Application.Handlers.Commands.EquipmentPoints;

public class CreateEquipmentPointHandler : MediatorRequestHandler<CreateEquipmentPoint, EquipmentPointResponse>
{
    private readonly IEquipmentPointRepository _repository;
    private readonly IMapper _mapper;

    public CreateEquipmentPointHandler(IEquipmentPointRepository repository, IMapper mapper)
    {
        _repository = repository;
        _mapper = mapper;
    }

    protected override async Task<EquipmentPointResponse> Handle(CreateEquipmentPoint request, CancellationToken token)
    {
        return _mapper.Map<EquipmentPointResponse>(await _repository.AddAsync(_mapper.Map<EquipmentPoint>(request)));
    }
}