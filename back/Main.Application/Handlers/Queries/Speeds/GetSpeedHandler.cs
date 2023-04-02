using AutoMapper;
using Main.Application.Requests.Queries;
using Main.Application.Responses;
using Main.Core.Interfaces.Repositories;
using MassTransit.Mediator;

namespace Main.Application.Handlers.Queries.Speeds;

public class GetSpeedHandler : MediatorRequestHandler<GetSpeed, SpeedResponse>
{
    private readonly ISpeedRepository _repository;
    private readonly IMapper _mapper;

    public GetSpeedHandler(ISpeedRepository repository, IMapper mapper)
    {
        _repository = repository;
        _mapper = mapper;
    }

    protected override async Task<SpeedResponse> Handle(GetSpeed request, CancellationToken token)
    {
        return _mapper.Map<SpeedResponse>(await _repository.GetByIdAsync(request.Id));
    }
}