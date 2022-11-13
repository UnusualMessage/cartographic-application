using AutoMapper;
using Main.Application.Requests.Commands;
using Main.Application.Responses;
using Main.Core.Entities;
using Main.Core.Interfaces.Repositories;
using MassTransit.Mediator;

namespace Main.Application.Handlers.Commands.Posts;

public class CreatePostHandler : MediatorRequestHandler<CreatePost, PostResponse>
{
    private readonly IPostRepository _postRepository;
    private readonly IMapper _mapper;

    public CreatePostHandler(IPostRepository repository, IMapper mapper)
    {
        _postRepository = repository;
        _mapper = mapper;
    }
    
    protected override async Task<PostResponse> Handle(CreatePost request, CancellationToken cancellationToken)
    {
        return _mapper.Map<PostResponse>(await _postRepository.AddAsync(_mapper.Map<Post>(request)));
    }
}