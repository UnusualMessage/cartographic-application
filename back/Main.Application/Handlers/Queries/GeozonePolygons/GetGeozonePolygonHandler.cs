using AutoMapper;
using Main.Application.Requests.Queries;
using Main.Application.Responses;
using Main.Core.Interfaces.Repositories;
using MassTransit.Mediator;

namespace Main.Application.Handlers.Queries.GeozonePolygons;

public class GetGeozonePolygonHandler : MediatorRequestHandler<GetGeozonePolygon, GeozonePolygonResponse>
{
    private readonly IGeozonePolygonRepository _repository;
    private readonly IMapper _mapper;

    public GetGeozonePolygonHandler(IGeozonePolygonRepository repository, IMapper mapper)
    {
        _repository = repository;
        _mapper = mapper;
    }

    protected override async Task<GeozonePolygonResponse> Handle(GetGeozonePolygon request, CancellationToken token)
    {
        return _mapper.Map<GeozonePolygonResponse>(await _repository.GetByIdAsync(request.Id));
    }
}