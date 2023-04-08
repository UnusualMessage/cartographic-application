using AutoMapper;
using Main.Application.Requests.Queries;
using Main.Application.Responses;
using Main.Core.Interfaces.Repositories;
using MassTransit.Mediator;
using Sieve.Services;

namespace Main.Application.Handlers.Queries.EquipmentTypes;

public class GetEquipmentTypesHandler : MediatorRequestHandler<GetEquipmentTypes, EquipmentTypesResponse>
{
    private readonly IEquipmentTypeRepository _repository;
    private readonly ISieveProcessor _processor;
    private readonly IMapper _mapper;

    public GetEquipmentTypesHandler(IEquipmentTypeRepository repository, IMapper mapper, ISieveProcessor processor)
    {
        _repository = repository;
        _processor = processor;
        _mapper = mapper;
    }

    protected override async Task<EquipmentTypesResponse> Handle(GetEquipmentTypes request, CancellationToken token)
    {
        var types = _mapper.Map<IEnumerable<EquipmentTypeResponse>>(await _repository.GetAllAsync());
        var response = _processor.Apply(request.Model, types.AsQueryable()).AsEnumerable();
        return new EquipmentTypesResponse(response);
    }
}