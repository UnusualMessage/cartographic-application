using AutoMapper;
using Identity.Application.Requests.Queries.User;
using Identity.Application.Responses.User;
using Identity.Core.Interfaces.Repositories;
using MediatR;

namespace Identity.Application.Handlers.Query.User;

public class GetUsersHandler : IRequestHandler<GetUsers, IEnumerable<UserResponse>>
{
    private readonly IUserRepository _userRepository;
    private readonly IMapper _mapper;

    public GetUsersHandler(IUserRepository repository, IMapper mapper)
    {
        _userRepository = repository;
        _mapper = mapper;
    }
    
    public async Task<IEnumerable<UserResponse>> Handle(GetUsers request, CancellationToken cancellationToken)
    {
        return _mapper.Map<IEnumerable<UserResponse>>(await _userRepository.GetAllAsync());
    }
}