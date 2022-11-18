using AutoMapper;
using Main.Application.Requests.Queries;
using Main.Application.Responses;
using Main.Core.Interfaces.Repositories;
using MassTransit.Mediator;
using Sieve.Services;

namespace Main.Application.Handlers.Queries.Equipments;

public class GetEquipmentsHandler : MediatorRequestHandler<GetEquipments, EquipmentsResponse>
{
    private readonly IEquipmentRepository _repository;
    private readonly IMapper _mapper;
    private readonly ISieveProcessor _processor;

    public GetEquipmentsHandler(IEquipmentRepository repository, IMapper mapper, ISieveProcessor processor)
    {
        _repository = repository;
        _mapper = mapper;
        _processor = processor;
    }

    protected override async Task<EquipmentsResponse> Handle(GetEquipments request, CancellationToken token)
    {
        var equipments = _mapper.Map<IEnumerable<EquipmentResponse>>(await _repository.GetAllAsync());
        var response = _processor.Apply(request.Model, equipments.AsQueryable()).AsEnumerable();
        return new EquipmentsResponse(response);
    }
}