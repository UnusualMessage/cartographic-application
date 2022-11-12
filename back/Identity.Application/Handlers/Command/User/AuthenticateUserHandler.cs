using Identity.Application.Requests.Commands.Auth;
using Shared.Core.Exceptions;
using Identity.Application.Responses.Auth;
using Identity.Core.Interfaces.Repositories;
using Identity.Core.Interfaces.Services;
using MediatR;

namespace Identity.Application.Handlers.Command.User;

public class AuthenticateUserHandler : IRequestHandler<AuthenticateUser, AuthenticateUserResponse>
{
    private readonly IUserRepository _userRepository;
    private readonly ITokenService _tokenService;
    private readonly IPasswordHasher _passwordHasher;
    
    public AuthenticateUserHandler(IUserRepository repository, ITokenService service, IPasswordHasher hasher)
    {
        _userRepository = repository;
        _tokenService = service;
        _passwordHasher = hasher;
    }
    
    public async Task<AuthenticateUserResponse> Handle(AuthenticateUser request, CancellationToken cancellationToken)
    {
        var user = await _userRepository.GetUserByLoginAsync(request.Login);

        if (user is null)
        {
            return FailAuthentication();
        }

        var passwordInvalid = _passwordHasher.VerifyPassword(request.Password, user.Password) == false;
        
        if (passwordInvalid)
        {
            return FailAuthentication();
        }

        var refreshToken = _tokenService.GetGeneratedRefreshToken(request.IpAddress ?? "0.0.0.0");
        user.RefreshTokens.Add(refreshToken);

        await _userRepository.UpdateAsync(user);
        
        AuthenticateUserResponse response = new()
        {
            RefreshToken = refreshToken.Token,
            AccessToken = _tokenService.GetGeneratedAccessToken(user).Token,
        };

        return response;
    }

    private static AuthenticateUserResponse FailAuthentication()
    {
        throw new NotFoundException("Неверный логин или пароль!");
    }
}