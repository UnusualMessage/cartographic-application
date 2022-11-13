using AutoMapper;
using Main.Application.Requests.Queries;
using Main.Application.Responses;
using Main.Core.Interfaces.Repositories;
using MassTransit.Mediator;

namespace Main.Application.Handlers.Queries.Posts;

public class GetPostHandler : MediatorRequestHandler<GetPost, PostResponse>
{
    private readonly IPostRepository _postRepository;
    private readonly IMapper _mapper;

    public GetPostHandler(IPostRepository repository, IMapper mapper)
    {
        _postRepository = repository;
        _mapper = mapper;
    }
    
    protected override async Task<PostResponse> Handle(GetPost request, CancellationToken cancellationToken)
    {
        return _mapper.Map<PostResponse>(await _postRepository.GetByIdAsync(request.Id));
    }
}