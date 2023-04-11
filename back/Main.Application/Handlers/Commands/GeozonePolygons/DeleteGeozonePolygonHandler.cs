using AutoMapper;
using Main.Application.Requests.Commands;
using Main.Application.Responses;
using Main.Core.Interfaces.Repositories;
using MassTransit.Mediator;

namespace Main.Application.Handlers.Commands.GeozonePolygons;

public class DeleteGeozonePolygonHandler : MediatorRequestHandler<DeleteGeozonePolygon, GeozonePolygonResponse>
{
    private readonly IGeozonePolygonRepository _repository;
    private readonly IMapper _mapper;

    public DeleteGeozonePolygonHandler(IGeozonePolygonRepository repository, IMapper mapper)
    {
        _repository = repository;
        _mapper = mapper;
    }

    protected override async Task<GeozonePolygonResponse> Handle(DeleteGeozonePolygon request, CancellationToken token)
    {
        return _mapper.Map<GeozonePolygonResponse>(await _repository.DeleteByIdAsync(request.Id));
    }
}