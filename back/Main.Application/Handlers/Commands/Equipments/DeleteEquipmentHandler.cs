using AutoMapper;
using Main.Application.Requests.Commands;
using Main.Application.Responses;
using Main.Core.Interfaces.Repositories;
using MassTransit.Mediator;

namespace Main.Application.Handlers.Commands.Equipments;

public class DeleteEquipmentHandler : MediatorRequestHandler<DeleteEquipment, EquipmentResponse>
{
    private readonly IEquipmentRepository _repository;
    private readonly IMapper _mapper;

    public DeleteEquipmentHandler(IEquipmentRepository repository, IMapper mapper)
    {
        _repository = repository;
        _mapper = mapper;
    }

    protected override async Task<EquipmentResponse> Handle(DeleteEquipment request, CancellationToken token)
    {
        return _mapper.Map<EquipmentResponse>(await _repository.DeleteByIdAsync(request.Id));
    }
}