using Identity.Application.Handlers.QueryHandlers.UserQueryHandlers;
using Identity.Application.Requests.Queries.UserQueries;
using Identity.Application.Responses.UserResponses;
using MediatR;
using Microsoft.Extensions.DependencyInjection;

namespace Identity.Application.Handlers.QueryHandlers.Extensions;

public static class UserQueryHandlersConfiguration
{
    public static void AddUserQueryHandlers(this IServiceCollection services)
    {
        services
            .AddScoped<IRequestHandler<GetAccessToken, AuthenticateUserResponse>, GetAccessTokenHandler>();
    }
}