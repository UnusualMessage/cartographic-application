using AutoMapper;
using Main.Application.Requests.Commands;
using Main.Application.Responses;
using Main.Core.Interfaces.Repositories;
using MassTransit.Mediator;

namespace Main.Application.Handlers.Commands.Trailers;

public class DeleteTrailerHandler : MediatorRequestHandler<DeleteTrailer, TrailerResponse>
{
    private readonly ITrailerRepository _repository;
    private readonly IMapper _mapper;

    public DeleteTrailerHandler(ITrailerRepository repository, IMapper mapper)
    {
        _repository = repository;
        _mapper = mapper;
    }

    protected override async Task<TrailerResponse> Handle(DeleteTrailer request, CancellationToken cancellationToken)
    {
        return _mapper.Map<TrailerResponse>(await _repository.DeleteByIdAsync(request.Id));
    }
}