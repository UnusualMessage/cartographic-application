using AutoMapper;
using Main.Application.Requests.Commands;
using Main.Application.Responses;
using Main.Core.Interfaces.Repositories;
using MassTransit.Mediator;

namespace Main.Application.Handlers.Commands.EquipmentPoints;

public class DeleteEquipmentPointHandler : MediatorRequestHandler<DeleteEquipmentPoint, EquipmentPointResponse>
{
    private readonly IEquipmentPointRepository _repository;
    private readonly IMapper _mapper;

    public DeleteEquipmentPointHandler(IEquipmentPointRepository repository, IMapper mapper)
    {
        _repository = repository;
        _mapper = mapper;
    }

    protected override async Task<EquipmentPointResponse> Handle(DeleteEquipmentPoint request, CancellationToken token)
    {
        return _mapper.Map<EquipmentPointResponse>(await _repository.DeleteByIdAsync(request.Id));
    }
}