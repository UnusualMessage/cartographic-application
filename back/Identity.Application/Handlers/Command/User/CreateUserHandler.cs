using AutoMapper;
using Identity.Application.Requests.Commands;
using Identity.Application.Responses;
using Identity.Core.Interfaces.Repositories;
using Identity.Core.Interfaces.Services;
using MediatR;
using Shared.Core.Exceptions;

namespace Identity.Application.Handlers.Command.User;

public class CreateUserHandler : IRequestHandler<CreateUser, UserResponse>
{
    private readonly IMapper _mapper;
    private readonly IPasswordHasher _passwordHasher;
    private readonly IUserRepository _userRepository;

    public CreateUserHandler(IUserRepository userRepository, IMapper mapper, IPasswordHasher hasher)
    {
        _userRepository = userRepository;
        _mapper = mapper;
        _passwordHasher = hasher;
    }

    public async Task<UserResponse> Handle(CreateUser request, CancellationToken cancellationToken)
    {
        var user = await _userRepository.GetUserByLoginAsync(request.Login);

        if (user is not null) return FailRegistration();

        var newUser = _mapper.Map<Core.Entities.User>(request);
        newUser.Password = _passwordHasher.HashPassword(request.Password);

        user = await _userRepository.AddAsync(newUser);

        if (user is null) return FailRegistration();

        return _mapper.Map<UserResponse>(user);
    }

    private static UserResponse FailRegistration()
    {
        throw new BadRequestException("Данный логин уже занят!");
    }
}