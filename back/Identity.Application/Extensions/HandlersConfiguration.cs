using Identity.Application.Handlers.Extensions;
using Microsoft.Extensions.DependencyInjection;

namespace Identity.Application.Extensions;

public static class HandlersConfiguration
{
    public static void AddHandlers(this IServiceCollection services)
    {
        services.AddUserHandlers();
    }
}