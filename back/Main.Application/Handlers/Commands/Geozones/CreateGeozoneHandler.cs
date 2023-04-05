using AutoMapper;
using Main.Application.Requests.Commands;
using Main.Application.Responses;
using Main.Core.Entities;
using Main.Core.Interfaces.Repositories;
using MassTransit.Mediator;

namespace Main.Application.Handlers.Commands.Geozones;

public class CreateGeozoneHandler : MediatorRequestHandler<CreateGeozone, GeozoneResponse>
{
    private readonly IGeozoneRepository _repository;
    private readonly IMapper _mapper;

    public CreateGeozoneHandler(IGeozoneRepository repository, IMapper mapper)
    {
        _repository = repository;
        _mapper = mapper;
    }

    protected override async Task<GeozoneResponse> Handle(CreateGeozone request, CancellationToken token)
    {
        return _mapper.Map<GeozoneResponse>(await _repository.AddAsync(_mapper.Map<Geozone>(request)));
    }
}