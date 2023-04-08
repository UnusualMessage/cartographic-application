using AutoMapper;
using Main.Application.Requests.Queries;
using Main.Application.Responses;
using Main.Core.Interfaces.Repositories;
using MassTransit.Mediator;
using Sieve.Services;

namespace Main.Application.Handlers.Queries.Posts;

public class GetPostsHandler : MediatorRequestHandler<GetPosts, PostsResponse>
{
    private readonly IPostRepository _repository;
    private readonly ISieveProcessor _processor;
    private readonly IMapper _mapper;

    public GetPostsHandler(IPostRepository repository, IMapper mapper, ISieveProcessor processor)
    {
        _repository = repository;
        _mapper = mapper;
        _processor = processor;
    }
    
    protected override async Task<PostsResponse> Handle(GetPosts request, CancellationToken cancellationToken)
    {
        var posts = _mapper.Map<IEnumerable<PostResponse>>(await _repository.GetAllAsync());
        var response = _processor.Apply(request.Model, posts.AsQueryable()).AsEnumerable();
        return new PostsResponse(response);
    }
}