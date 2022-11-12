using Identity.Application.Handlers.Command.User;
using Identity.Application.Requests.Commands.Auth;
using Identity.Application.Responses.Auth;
using MediatR;
using Microsoft.Extensions.DependencyInjection;

namespace Identity.Application.Handlers.Command.Extensions;

public static class UserCommandHandlersConfiguration
{
    public static void AddUserCommandHandlers(this IServiceCollection services)
    {
        services.AddScoped<IRequestHandler<AuthenticateUser, AuthenticateUserResponse>, AuthenticateUserHandler>();
        services.AddScoped<IRequestHandler<RefreshUser, AuthenticateUserResponse>, RefreshUserHandler>();
        services.AddScoped<IRequestHandler<RegisterUser, AuthenticateUserResponse>, RegisterUserHandler>();
        services.AddScoped<IRequestHandler<RevokeUser, RevokeUserResponse>, RevokeUserHandler>();
    }
}