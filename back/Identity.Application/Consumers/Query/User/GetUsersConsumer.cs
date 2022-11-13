using AutoMapper;
using Identity.Application.Requests.Queries;
using Identity.Application.Responses;
using Identity.Core.Interfaces.Repositories;
using MassTransit.Mediator;

namespace Identity.Application.Consumers.Query.User;

public class GetUsersHandler : MediatorRequestHandler<GetUsers, UsersResponse>
{
    private readonly IMapper _mapper;
    private readonly IUserRepository _userRepository;

    public GetUsersHandler(IUserRepository repository, IMapper mapper)
    {
        _userRepository = repository;
        _mapper = mapper;
    }

    protected override async Task<UsersResponse> Handle(GetUsers request, CancellationToken cancellationToken)
    {
        var users = _mapper.Map<IEnumerable<UserResponse>>(await _userRepository.GetAllAsync());
        return new UsersResponse(users);
    }
}