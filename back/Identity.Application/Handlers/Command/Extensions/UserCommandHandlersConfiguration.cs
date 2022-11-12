﻿using Identity.Application.Handlers.Command.Auth;
using Identity.Application.Handlers.Command.User;
using Identity.Application.Requests.Commands.Auth;
using Identity.Application.Requests.Commands.User;
using Identity.Application.Responses.Auth;
using Identity.Application.Responses.User;
using MediatR;
using Microsoft.Extensions.DependencyInjection;

namespace Identity.Application.Handlers.Command.Extensions;

public static class UserCommandHandlersConfiguration
{
    public static void AddUserCommandHandlers(this IServiceCollection services)
    {
        services.AddScoped<IRequestHandler<AuthenticateUser, AuthenticateUserResponse>, AuthenticateUserHandler>();
        services.AddScoped<IRequestHandler<RefreshUser, AuthenticateUserResponse>, RefreshUserHandler>();
        services.AddScoped<IRequestHandler<CreateUser, UserResponse>, CreateUserHandler>();
        services.AddScoped<IRequestHandler<RevokeUser, RevokeUserResponse>, RevokeUserHandler>();
    }
}