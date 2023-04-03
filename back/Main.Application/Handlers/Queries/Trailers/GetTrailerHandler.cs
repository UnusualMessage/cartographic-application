using AutoMapper;
using Main.Application.Requests.Queries;
using Main.Application.Responses;
using Main.Core.Interfaces.Repositories;
using MassTransit.Mediator;

namespace Main.Application.Handlers.Queries.Trailers;

public class GetTrailerHandler : MediatorRequestHandler<GetTrailer, TrailerResponse>
{
    private readonly ITrailerRepository _repository;
    private readonly IMapper _mapper;

    public GetTrailerHandler(ITrailerRepository repository, IMapper mapper)
    {
        _repository = repository;
        _mapper = mapper;
    }

    protected override async Task<TrailerResponse> Handle(GetTrailer request, CancellationToken token)
    {
        return _mapper.Map<TrailerResponse>(await _repository.GetByIdAsync(request.Id));
    }
}