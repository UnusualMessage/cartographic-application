using AutoMapper;
using Main.Application.Requests.Commands;
using Main.Application.Responses;
using Main.Core.Interfaces.Repositories;
using MassTransit.Mediator;

namespace Main.Application.Handlers.Commands.Posts;

public class DeletePostHandler : MediatorRequestHandler<DeletePost, PostResponse>
{
    private readonly IPostRepository _postRepository;
    private readonly IMapper _mapper;

    public DeletePostHandler(IPostRepository repository, IMapper mapper)
    {
        _postRepository = repository;
        _mapper = mapper;
    }
    
    protected override async Task<PostResponse> Handle(DeletePost request, CancellationToken cancellationToken)
    {
        return _mapper.Map<PostResponse>(await _postRepository.DeleteByIdAsync(request.Id));
    }
}