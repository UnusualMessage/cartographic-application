using AutoMapper;
using Main.Application.Requests.Queries;
using Main.Application.Responses;
using Main.Core.Interfaces.Repositories;
using MassTransit.Mediator;
using Sieve.Services;

namespace Main.Application.Handlers.Queries.Trailers;

public class GetTrailersHandler : MediatorRequestHandler<GetTrailers, TrailersResponse>
{
    private readonly ITrailerRepository _repository;
    private readonly IMapper _mapper;
    private readonly ISieveProcessor _processor;

    public GetTrailersHandler(ITrailerRepository repository, IMapper mapper, ISieveProcessor processor)
    {
        _repository = repository;
        _mapper = mapper;
        _processor = processor;
    }

    protected override async Task<TrailersResponse> Handle(GetTrailers request,
        CancellationToken cancellationToken)
    {
        var trailers = _mapper.Map<IEnumerable<TrailerResponse>>(await _repository.GetAllAsync());
        var response = _processor.Apply(request.Model, trailers.AsQueryable()).AsEnumerable();
        return new TrailersResponse(response);
    }
}