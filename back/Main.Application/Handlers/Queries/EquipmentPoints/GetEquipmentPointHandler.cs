using AutoMapper;
using Main.Application.Requests.Queries;
using Main.Application.Responses;
using Main.Core.Interfaces.Repositories;
using MassTransit.Mediator;

namespace Main.Application.Handlers.Queries.EquipmentPoints;

public class GetEquipmentPointHandler : MediatorRequestHandler<GetEquipmentPoint, EquipmentPointResponse>
{
    private readonly IEquipmentPointRepository _repository;
    private readonly IMapper _mapper;

    public GetEquipmentPointHandler(IEquipmentPointRepository repository, IMapper mapper)
    {
        _repository = repository;
        _mapper = mapper;
    }

    protected override async Task<EquipmentPointResponse> Handle(GetEquipmentPoint request, CancellationToken token)
    {
        return _mapper.Map<EquipmentPointResponse>(await _repository.GetByIdAsync(request.Id));
    }
}