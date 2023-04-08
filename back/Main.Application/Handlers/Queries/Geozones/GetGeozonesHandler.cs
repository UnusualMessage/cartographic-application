using AutoMapper;
using Main.Application.Requests.Queries;
using Main.Application.Responses;
using Main.Core.Interfaces.Repositories;
using MassTransit.Mediator;
using Sieve.Services;

namespace Main.Application.Handlers.Queries.Geozones;

public class GetGeozonesHandler : MediatorRequestHandler<GetGeozones, GeozonesResponse>
{
    private readonly IGeozoneRepository _repository;
    private readonly ISieveProcessor _processor;
    private readonly IMapper _mapper;

    public GetGeozonesHandler(IGeozoneRepository repository, IMapper mapper, ISieveProcessor processor)
    {
        _repository = repository;
        _processor = processor;
        _mapper = mapper;
    }

    protected override async Task<GeozonesResponse> Handle(GetGeozones request, CancellationToken token)
    {
        var geozones = _mapper.Map<IEnumerable<GeozoneResponse>>(await _repository.GetAllAsync());
        var response = _processor.Apply(request.Model, geozones.AsQueryable()).AsEnumerable();
        return new GeozonesResponse(response);
    }
}