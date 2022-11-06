using AutoMapper;
using Common.Core.Exceptions;
using Identity.Application.Requests.Commands.User;
using Identity.Application.Responses.User;
using Identity.Core.Interfaces.Repositories;
using Identity.Core.Interfaces.Services;
using MediatR;

namespace Identity.Application.Handlers.Command.User;

public class RegisterUserHandler : IRequestHandler<RegisterUser, AuthenticateUserResponse>
{
    private readonly IUserRepository _userRepository;
    private readonly IMapper _mapper;
    private readonly ITokenService _tokenService;
    private readonly IPasswordHasher _passwordHasher;

    public RegisterUserHandler(IUserRepository userRepository, IMapper mapper, ITokenService tokenService, 
        IPasswordHasher hasher)
    {
        _userRepository = userRepository;
        _mapper = mapper;
        _tokenService = tokenService;
        _passwordHasher = hasher;
    }

    public async Task<AuthenticateUserResponse> Handle(RegisterUser request, CancellationToken cancellationToken)
    {
        var user = await _userRepository.GetUserByLoginAsync(request.Login);

        if (user is not null)
        {
            return FailRegistration();
        }

        var newUser = _mapper.Map<Core.Entities.User>(request);
        var refreshToken = _tokenService.GetGeneratedRefreshToken(request.IpAddress ?? "");

        newUser.RefreshTokens.Add(refreshToken);
        newUser.Password = _passwordHasher.HashPassword(request.Password);

        user = await _userRepository.AddAsync(newUser);

        if (user is null)
        {
            return FailRegistration();
        }

        return new AuthenticateUserResponse()
        {
            RefreshToken = refreshToken.Token,
            AccessToken = _tokenService.GetGeneratedAccessToken(user).Token,
        };
    }
    
    private static AuthenticateUserResponse FailRegistration()
    {
        throw new BadRequestException("Данный логин уже занят!");
    }
}