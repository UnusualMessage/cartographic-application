using AutoMapper;
using Main.Application.Requests.Queries;
using Main.Application.Responses;
using Main.Core.Interfaces.Repositories;
using MassTransit.Mediator;

namespace Main.Application.Handlers.Queries.GeozonePolygons;

public class GetGeozonePolygonsHandler : MediatorRequestHandler<GetGeozonePolygons, GeozonePolygonsResponse>
{
    private readonly IGeozoneRepository _repository;
    private readonly IMapper _mapper;

    public GetGeozonePolygonsHandler(IGeozoneRepository repository, IMapper mapper)
    {
        _repository = repository;
        _mapper = mapper;
    }

    protected override async Task<GeozonePolygonsResponse> Handle(GetGeozonePolygons request, CancellationToken token)
    {
        var response = _mapper.Map<IEnumerable<GeozonePolygonResponse>>(await _repository.GetAllAsync());
        return new GeozonePolygonsResponse(response);
    }
}