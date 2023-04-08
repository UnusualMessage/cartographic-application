using AutoMapper;
using Main.Application.Requests.Commands;
using Main.Application.Responses;
using Main.Core.Interfaces.Repositories;
using MassTransit.Mediator;

namespace Main.Application.Handlers.Commands.EquipmentTypes;

public class DeleteEquipmentTypeHandler : MediatorRequestHandler<DeleteEquipmentType, EquipmentTypeResponse>
{
    private readonly IEquipmentTypeRepository _repository;
    private readonly IMapper _mapper;

    public DeleteEquipmentTypeHandler(IEquipmentTypeRepository repository, IMapper mapper)
    {
        _repository = repository;
        _mapper = mapper;
    }

    protected override async Task<EquipmentTypeResponse> Handle(DeleteEquipmentType request, CancellationToken token)
    {
        return _mapper.Map<EquipmentTypeResponse>(await _repository.DeleteByIdAsync(request.Id));
    }
}