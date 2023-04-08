using AutoMapper;
using Main.Application.Requests.Commands;
using Main.Application.Responses;
using Main.Core.Interfaces.Repositories;
using MassTransit.Mediator;

namespace Main.Application.Handlers.Commands.Geozones;

public class DeleteGeozoneHandler : MediatorRequestHandler<DeleteGeozone, GeozoneResponse>
{
    private readonly IGeozoneRepository _repository;
    private readonly IMapper _mapper;

    public DeleteGeozoneHandler(IGeozoneRepository repository, IMapper mapper)
    {
        _repository = repository;
        _mapper = mapper;
    }

    protected override async Task<GeozoneResponse> Handle(DeleteGeozone request, CancellationToken token)
    {
        return _mapper.Map<GeozoneResponse>(await _repository.DeleteByIdAsync(request.Id));
    }
}