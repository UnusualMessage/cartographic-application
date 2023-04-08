using AutoMapper;
using Main.Application.Requests.Queries;
using Main.Application.Responses;
using Main.Core.Interfaces.Repositories;
using MassTransit.Mediator;

namespace Main.Application.Handlers.Queries.Geozones;

public class GetGeozoneHandler : MediatorRequestHandler<GetGeozone, GeozoneResponse>
{
    private readonly IGeozoneRepository _repository;
    private readonly IMapper _mapper;

    public GetGeozoneHandler(IGeozoneRepository repository, IMapper mapper)
    {
        _repository = repository;
        _mapper = mapper;
    }

    protected override async Task<GeozoneResponse> Handle(GetGeozone request, CancellationToken token)
    {
        return _mapper.Map<GeozoneResponse>(await _repository.GetByIdAsync(request.Id));
    }
}