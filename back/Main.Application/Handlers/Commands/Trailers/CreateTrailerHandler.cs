using AutoMapper;
using Main.Application.Requests.Commands;
using Main.Application.Responses;
using Main.Core.Entities;
using Main.Core.Interfaces.Repositories;
using MassTransit.Mediator;

namespace Main.Application.Handlers.Commands.Trailers;

public class CreateTrailerHandler : MediatorRequestHandler<CreateTrailer, TrailerResponse>
{
    private readonly ITrailerRepository _repository;
    private readonly IMapper _mapper;

    public CreateTrailerHandler(ITrailerRepository repository, IMapper mapper)
    {
        _repository = repository;
        _mapper = mapper;
    }

    protected override async Task<TrailerResponse> Handle(CreateTrailer request, CancellationToken cancellationToken)
    {
        return _mapper.Map<TrailerResponse>(await _repository.AddAsync(_mapper.Map<Trailer>(request)));
    }
}