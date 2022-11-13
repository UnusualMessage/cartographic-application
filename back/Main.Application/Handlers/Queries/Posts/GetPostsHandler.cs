using AutoMapper;
using Main.Application.Requests.Queries;
using Main.Application.Responses;
using Main.Core.Interfaces.Repositories;
using MassTransit.Mediator;

namespace Main.Application.Handlers.Queries.Posts;

public class GetPostsHandler : MediatorRequestHandler<GetPosts, PostsResponse>
{
    private readonly IPostRepository _postRepository;
    private readonly IMapper _mapper;

    public GetPostsHandler(IPostRepository repository, IMapper mapper)
    {
        _postRepository = repository;
        _mapper = mapper;
    }
    
    protected override async Task<PostsResponse> Handle(GetPosts request, CancellationToken cancellationToken)
    {
        var posts = _mapper.Map<IEnumerable<PostResponse>>(await _postRepository.GetAllAsync());
        return new PostsResponse(posts);
    }
}