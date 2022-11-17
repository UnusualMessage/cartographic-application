using Identity.Application.MappingProfiles;
using Microsoft.Extensions.DependencyInjection;

namespace Identity.Application.Extensions;

public static class MappingProfilesConfiguration
{
    public static void AddMappingProfiles(this IServiceCollection services)
    {
        services
            .AddAutoMapper(typeof(UserProfile))
            .AddAutoMapper(typeof(RefreshTokenProfile));
    }
}