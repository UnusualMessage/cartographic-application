using AutoMapper;
using Main.Application.Requests.Queries;
using Main.Application.Responses;
using Main.Core.Interfaces.Repositories;
using MassTransit.Mediator;
using Sieve.Services;

namespace Main.Application.Handlers.Queries.Mounteds;

public class GetMountedsHandler : MediatorRequestHandler<GetMounteds, MountedsResponse>
{
    private readonly IMountedRepository _repository;
    private readonly ISieveProcessor _processor;
    private readonly IMapper _mapper;

    public GetMountedsHandler(IMountedRepository repository, IMapper mapper, ISieveProcessor processor)
    {
        _repository = repository;
        _processor = processor;
        _mapper = mapper;
    }

    protected override async Task<MountedsResponse> Handle(GetMounteds request, CancellationToken token)
    {
        var geozones = _mapper.Map<IEnumerable<MountedResponse>>(await _repository.GetAllAsync());
        var response = _processor.Apply(request.Model, geozones.AsQueryable()).AsEnumerable();
        return new MountedsResponse(response);
    }
}