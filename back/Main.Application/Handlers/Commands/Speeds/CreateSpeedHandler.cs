using AutoMapper;
using Main.Application.Requests.Commands;
using Main.Application.Responses;
using Main.Core.Entities;
using Main.Core.Interfaces.Repositories;
using MassTransit.Mediator;

namespace Main.Application.Handlers.Commands.Speeds;

public class CreateSpeedHandler : MediatorRequestHandler<CreateSpeed, SpeedResponse>
{
    private readonly ISpeedRepository _repository;
    private readonly IMapper _mapper;

    public CreateSpeedHandler(ISpeedRepository repository, IMapper mapper)
    {
        _repository = repository;
        _mapper = mapper;
    }

    protected override async Task<SpeedResponse> Handle(CreateSpeed request, CancellationToken cancellationToken)
    {
        return _mapper.Map<SpeedResponse>(await _repository.AddAsync(_mapper.Map<Speed>(request)));
    }
}