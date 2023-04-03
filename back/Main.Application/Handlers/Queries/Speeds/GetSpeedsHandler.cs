using AutoMapper;
using Main.Application.Requests.Queries;
using Main.Application.Responses;
using Main.Core.Interfaces.Repositories;
using MassTransit.Mediator;
using Sieve.Services;

namespace Main.Application.Handlers.Queries.Speeds;

public class GetSpeedsHandler : MediatorRequestHandler<GetSpeeds, SpeedsResponse>
{
    private readonly ISpeedRepository _repository;
    private readonly IMapper _mapper;
    private readonly ISieveProcessor _processor;

    public GetSpeedsHandler(ISpeedRepository repository, IMapper mapper, ISieveProcessor processor)
    {
        _repository = repository;
        _mapper = mapper;
        _processor = processor;
    }

    protected override async Task<SpeedsResponse> Handle(GetSpeeds request,
        CancellationToken cancellationToken)
    {
        var speeds = _mapper.Map<IEnumerable<SpeedResponse>>(await _repository.GetAllAsync());
        var response = _processor.Apply(request.Model, speeds.AsQueryable()).AsEnumerable();
        return new SpeedsResponse(response);
    }
}