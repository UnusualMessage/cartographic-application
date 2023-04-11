using AutoMapper;
using Main.Application.Requests.Queries;
using Main.Application.Responses;
using Main.Core.Interfaces.Repositories;
using MassTransit.Mediator;

namespace Main.Application.Handlers.Queries.EquipmentPoints;

public class GetEquipmentPointsHandler : MediatorRequestHandler<GetEquipmentPoints, EquipmentPointsResponse>
{
    private readonly IEquipmentPointRepository _repository;
    private readonly IMapper _mapper;

    public GetEquipmentPointsHandler(IEquipmentPointRepository repository, IMapper mapper)
    {
        _repository = repository;
        _mapper = mapper;
    }

    protected override async Task<EquipmentPointsResponse> Handle(GetEquipmentPoints request, CancellationToken token)
    {
        var response = _mapper.Map<IEnumerable<EquipmentPointResponse>>(await _repository.GetAllAsync());
        return new EquipmentPointsResponse(response);
    }
}