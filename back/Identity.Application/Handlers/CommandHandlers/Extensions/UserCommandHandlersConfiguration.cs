using Identity.Application.Handlers.CommandHandlers.UserCommandHandlers;
using Identity.Application.Requests.Commands.UserCommands;
using Identity.Application.Responses.UserResponses;
using MediatR;
using Microsoft.Extensions.DependencyInjection;

namespace Identity.Application.Handlers.CommandHandlers.Extensions;

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