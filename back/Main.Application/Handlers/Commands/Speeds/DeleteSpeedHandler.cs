using AutoMapper;
using Main.Application.Requests.Commands;
using Main.Application.Responses;
using Main.Core.Interfaces.Repositories;
using MassTransit.Mediator;

namespace Main.Application.Handlers.Commands.Speeds;

public class DeleteSpeedHandler : MediatorRequestHandler<DeleteSpeed, SpeedResponse>
{
    private readonly ISpeedRepository _repository;
    private readonly IMapper _mapper;

    public DeleteSpeedHandler(ISpeedRepository repository, IMapper mapper)
    {
        _repository = repository;
        _mapper = mapper;
    }

    protected override async Task<SpeedResponse> Handle(DeleteSpeed request, CancellationToken cancellationToken)
    {
        return _mapper.Map<SpeedResponse>(await _repository.DeleteByIdAsync(request.Id));
    }
}