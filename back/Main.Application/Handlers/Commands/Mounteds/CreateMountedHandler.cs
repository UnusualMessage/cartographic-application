using AutoMapper;
using Main.Application.Requests.Commands;
using Main.Application.Responses;
using Main.Core.Entities;
using Main.Core.Interfaces.Repositories;
using MassTransit.Mediator;

namespace Main.Application.Handlers.Commands.Mounteds;

public class CreateMountedHandler : MediatorRequestHandler<CreateMounted, MountedResponse>
{
    private readonly IMountedRepository _repository;
    private readonly IMapper _mapper;

    public CreateMountedHandler(IMountedRepository repository, IMapper mapper)
    {
        _repository = repository;
        _mapper = mapper;
    }

    protected override async Task<MountedResponse> Handle(CreateMounted request, CancellationToken token)
    {
        return _mapper.Map<MountedResponse>(await _repository.AddAsync(_mapper.Map<Mounted>(request)));
    }
}