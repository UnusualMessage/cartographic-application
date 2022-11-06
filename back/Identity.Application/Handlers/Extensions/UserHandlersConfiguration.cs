using Identity.Application.Handlers.CommandHandlers.Extensions;
using Identity.Application.Handlers.QueryHandlers.Extensions;
using Microsoft.Extensions.DependencyInjection;

namespace Identity.Application.Handlers.Extensions;

public static class UserHandlersConfiguration
{
    public static void AddUserHandlers(this IServiceCollection services)
    {
        services.AddUserCommandHandlers();
        services.AddUserQueryHandlers();
    }
}