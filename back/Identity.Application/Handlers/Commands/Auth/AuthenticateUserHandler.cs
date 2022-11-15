using Identity.Application.Requests.Commands;
using Identity.Application.Responses;
using Identity.Core.Interfaces.Repositories;
using Identity.Core.Interfaces.Services;
using MassTransit.Mediator;
using Shared.Core.Exceptions;

namespace Identity.Application.Handlers.Commands.Auth;

public class AuthenticateUserHandler : MediatorRequestHandler<AuthenticateUser, AuthenticateUserResponse>
{
    private readonly IPasswordHasher _passwordHasher;
    private readonly ITokenService _tokenService;
    private readonly IUserRepository _userRepository;

    public AuthenticateUserHandler(IUserRepository repository, ITokenService service, IPasswordHasher hasher)
    {
        _userRepository = repository;
        _tokenService = service;
        _passwordHasher = hasher;
    }

    protected override async Task<AuthenticateUserResponse> Handle(AuthenticateUser request,
        CancellationToken cancellationToken)
    {
        var user = await _userRepository.GetUserByLoginAsync(request.Login);

        if (user is null) return FailAuthentication();

        var passwordInvalid = _passwordHasher.VerifyPassword(request.Password, user.Password) == false;

        if (passwordInvalid) return FailAuthentication();

        var refreshToken = _tokenService.GenerateRefreshToken(request.IpAddress ?? "0.0.0.0");
        user.RefreshTokens.Add(refreshToken);

        await _userRepository.UpdateAsync(user);

        var accessToken = _tokenService.GenerateAccessToken(user).Token;
        return new AuthenticateUserResponse(accessToken, refreshToken.Token);
    }

    private static AuthenticateUserResponse FailAuthentication()
    {
        throw new NotFoundException("Неверный логин или пароль!");
    }
}