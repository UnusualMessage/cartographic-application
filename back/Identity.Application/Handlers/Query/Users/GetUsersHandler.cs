using AutoMapper;
using Identity.Application.Requests.Queries;
using Identity.Application.Responses;
using Identity.Core.Interfaces.Repositories;
using MassTransit.Mediator;
using Sieve.Services;

namespace Identity.Application.Handlers.Query.Users;

public class GetUsersHandler : MediatorRequestHandler<GetUsers, UsersResponse>
{
    private readonly IMapper _mapper;
    private readonly IUserRepository _userRepository;
    private readonly ISieveProcessor _sieveProcessor;

    public GetUsersHandler(IUserRepository repository, IMapper mapper, ISieveProcessor processor)
    {
        _userRepository = repository;
        _sieveProcessor = processor;
        _mapper = mapper;
    }

    protected override async Task<UsersResponse> Handle(GetUsers request, CancellationToken cancellationToken)
    {
        var users = _mapper.Map<IEnumerable<UserResponse>>(await _userRepository.GetAllAsync());
        var response = _sieveProcessor.Apply(request.Model, users.AsQueryable()).AsEnumerable();
        return new UsersResponse(response);
    }
}