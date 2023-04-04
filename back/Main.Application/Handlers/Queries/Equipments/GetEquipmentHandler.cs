using AutoMapper;
using Main.Application.Requests.Queries;
using Main.Application.Responses;
using Main.Core.Interfaces.Repositories;
using MassTransit.Mediator;

namespace Main.Application.Handlers.Queries.Equipments;

public class GetEquipmentHandler : MediatorRequestHandler<GetEquipment, EquipmentResponse>
{
    private readonly IEquipmentRepository _repository;
    private readonly IMapper _mapper;

    public GetEquipmentHandler(IEquipmentRepository repository, IMapper mapper)
    {
        _repository = repository;
        _mapper = mapper;
    }

    protected override async Task<EquipmentResponse> Handle(GetEquipment request, CancellationToken token)
    {
        return _mapper.Map<EquipmentResponse>(await _repository.GetByIdAsync(request.Id));
    }
}