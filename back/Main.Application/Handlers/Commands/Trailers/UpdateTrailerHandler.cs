using AutoMapper;
using Main.Application.Requests.Commands;
using Main.Application.Responses;
using Main.Core.Entities;
using Main.Core.Interfaces.Repositories;
using MassTransit.Mediator;
using Shared.Core.Exceptions;

namespace Main.Application.Handlers.Commands.Trailers;

public class UpdateTrailerHandler : MediatorRequestHandler<UpdateTrailer, TrailerResponse>
{
    private readonly ITrailerRepository _repository;
    private readonly IMapper _mapper;

    public UpdateTrailerHandler(ITrailerRepository repository, IMapper mapper)
    {
        _repository = repository;
        _mapper = mapper;
    }

    protected override async Task<TrailerResponse> Handle(UpdateTrailer request, CancellationToken cancellationToken)
    {
        try
        {
            var trailer = await _repository.UpdateAsync(_mapper.Map<Trailer>(request));

            if (trailer is null) throw new NotFoundException("Не удалось найти прицеп!");

            return _mapper.Map<TrailerResponse>(trailer);
        }
        catch (InvalidOperationException)
        {
            throw new BadRequestException("Не удалось обновить прицеп!");
        }
    }
}