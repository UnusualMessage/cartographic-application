using AutoMapper;
using Main.Application.Requests.Commands;
using Main.Application.Responses;
using Main.Core.Entities;
using Main.Core.Interfaces.Repositories;
using MassTransit.Mediator;

namespace Main.Application.Handlers.Commands.Geozones;

public class UpdateGeozoneHandler : MediatorRequestHandler<UpdateGeozone, GeozoneResponse>
{
    private readonly IGeozoneRepository _repository;
    private readonly IMapper _mapper;

    public UpdateGeozoneHandler(IGeozoneRepository repository, IMapper mapper)
    {
        _repository = repository;
        _mapper = mapper;
    }

    protected override async Task<GeozoneResponse> Handle(UpdateGeozone request, CancellationToken token)
    {
        return _mapper.Map<GeozoneResponse>(await _repository.UpdateAsync(_mapper.Map<Geozone>(request)));
    }
}