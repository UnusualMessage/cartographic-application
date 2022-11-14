using AutoMapper;
using Main.Application.Requests.Commands;
using Main.Application.Responses;
using Main.Core.Entities;
using Main.Core.Interfaces.Repositories;
using MassTransit.Mediator;

namespace Main.Application.Handlers.Commands.Posts;

public class UpdatePostHandler : MediatorRequestHandler<UpdatePost, PostResponse>
{
    private readonly IPostRepository _postRepository;
    private readonly IMapper _mapper;

    public UpdatePostHandler(IPostRepository repository, IMapper mapper)
    {
        _postRepository = repository;
        _mapper = mapper;
    }
    
    protected override async Task<PostResponse> Handle(UpdatePost request, CancellationToken cancellationToken)
    {
        return _mapper.Map<PostResponse>(await _postRepository.UpdateAsync(_mapper.Map<Post>(request)));
    }
}