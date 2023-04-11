using AutoMapper;
using Main.Application.Requests.Commands;
using Main.Application.Responses;
using Main.Core.Entities.Geometry;
using Main.Core.Interfaces.Repositories;
using MassTransit.Mediator;

namespace Main.Application.Handlers.Commands.GeozonePolygons;

public class CreateGeozonePolygonHandler : MediatorRequestHandler<CreateGeozonePolygon, GeozonePolygonResponse>
{
    private readonly IGeozonePolygonRepository _repository;
    private readonly IMapper _mapper;

    public CreateGeozonePolygonHandler(IGeozonePolygonRepository repository, IMapper mapper)
    {
        _repository = repository;
        _mapper = mapper;
    }

    protected override async Task<GeozonePolygonResponse> Handle(CreateGeozonePolygon request, CancellationToken token)
    {
        return _mapper.Map<GeozonePolygonResponse>(await _repository.AddAsync(_mapper.Map<GeozonePolygon>(request)));
    }
}