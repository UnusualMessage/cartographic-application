using Identity.Application.Handlers.Query.User;
using Identity.Application.Requests.Queries.Auth;
using Identity.Application.Responses.Auth;
using MediatR;
using Microsoft.Extensions.DependencyInjection;

namespace Identity.Application.Handlers.Query.Extensions;

public static class UserQueryHandlersConfiguration
{
    public static void AddUserQueryHandlers(this IServiceCollection services)
    {
        services
            .AddScoped<IRequestHandler<GetAccessToken, AuthenticateUserResponse>, GetAccessTokenHandler>();
    }
}