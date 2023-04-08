using AutoMapper;
using Main.Application.Requests.Queries;
using Main.Application.Responses;
using Main.Core.Interfaces.Repositories;
using MassTransit.Mediator;

namespace Main.Application.Handlers.Queries.Mounteds;

public class GetMountedHandler : MediatorRequestHandler<GetMounted, MountedResponse>
{
    private readonly IMountedRepository _repository;
    private readonly IMapper _mapper;

    public GetMountedHandler(IMountedRepository repository, IMapper mapper)
    {
        _repository = repository;
        _mapper = mapper;
    }

    protected override async Task<MountedResponse> Handle(GetMounted request, CancellationToken token)
    {
        return _mapper.Map<MountedResponse>(await _repository.GetByIdAsync(request.Id));
    }
}