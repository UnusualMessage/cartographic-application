using Identity.Application.Handlers.Query.User;
using Identity.Application.Requests.Queries;
using Identity.Application.Responses;
using MediatR;
using Microsoft.Extensions.DependencyInjection;

namespace Identity.Application.Handlers.Query.Extensions;

public static class UserQueryHandlersConfiguration
{
    public static void AddUserQueryHandlers(this IServiceCollection services)
    {
        services
            .AddScoped<IRequestHandler<GetAccessToken, AuthenticateUserResponse>, GetAccessTokenHandler>();

        services.AddScoped<IRequestHandler<GetUsers, IEnumerable<UserResponse>>, GetUsersHandler>();
    }
}