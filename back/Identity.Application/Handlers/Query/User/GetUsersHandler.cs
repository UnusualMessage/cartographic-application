using AutoMapper;
using Identity.Application.Requests.Queries;
using Identity.Application.Responses;
using Identity.Core.Interfaces.Repositories;
using MediatR;

namespace Identity.Application.Handlers.Query.User;

public class GetUsersHandler : IRequestHandler<GetUsers, IEnumerable<UserResponse>>
{
    private readonly IMapper _mapper;
    private readonly IUserRepository _userRepository;

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