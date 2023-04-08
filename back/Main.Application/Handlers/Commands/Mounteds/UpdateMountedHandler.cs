using AutoMapper;
using Main.Application.Requests.Commands;
using Main.Application.Responses;
using Main.Core.Entities;
using Main.Core.Interfaces.Repositories;
using MassTransit.Mediator;

namespace Main.Application.Handlers.Commands.Mounteds;

public class UpdateMountedHandler : MediatorRequestHandler<UpdateMounted, MountedResponse>
{
    private readonly IMountedRepository _repository;
    private readonly IMapper _mapper;

    public UpdateMountedHandler(IMountedRepository repository, IMapper mapper)
    {
        _repository = repository;
        _mapper = mapper;
    }

    protected override async Task<MountedResponse> Handle(UpdateMounted request, CancellationToken token)
    {
        return _mapper.Map<MountedResponse>(await _repository.UpdateAsync(_mapper.Map<Mounted>(request)));
    }
}