using AutoMapper;
using Main.Application.Requests.Commands;
using Main.Application.Responses;
using Main.Core.Interfaces.Repositories;
using MassTransit.Mediator;

namespace Main.Application.Handlers.Commands.Mounteds;

public class DeleteMountedHandler : MediatorRequestHandler<DeleteMounted, MountedResponse>
{
    private readonly IMountedRepository _repository;
    private readonly IMapper _mapper;

    public DeleteMountedHandler(IMountedRepository repository, IMapper mapper)
    {
        _repository = repository;
        _mapper = mapper;
    }

    protected override async Task<MountedResponse> Handle(DeleteMounted request, CancellationToken token)
    {
        return _mapper.Map<MountedResponse>(await _repository.DeleteByIdAsync(request.Id));
    }
}