using AutoMapper;
using Main.Application.Requests.Queries;
using Main.Application.Responses;
using Main.Core.Interfaces.Repositories;
using MassTransit.Mediator;

namespace Main.Application.Handlers.Queries.EquipmentTypes;

public class GetEquipmentTypeHandler : MediatorRequestHandler<GetEquipmentType, EquipmentTypeResponse>
{
    private readonly IEquipmentTypeRepository _repository;
    private readonly IMapper _mapper;

    public GetEquipmentTypeHandler(IEquipmentTypeRepository repository, IMapper mapper)
    {
        _repository = repository;
        _mapper = mapper;
    }

    protected override async Task<EquipmentTypeResponse> Handle(GetEquipmentType request, CancellationToken token)
    {
        return _mapper.Map<EquipmentTypeResponse>(await _repository.GetByIdAsync(request.Id));
    }
}