using Main.Application.MappingProfiles;
using Microsoft.Extensions.DependencyInjection;

namespace Main.Application.Extensions;

public static class MappingProfilesConfiguration
{
    public static void AddMappingProfiles(this IServiceCollection services)
    {
        services
            .AddAutoMapper(typeof(EmployeeProfile))
            .AddAutoMapper(typeof(OrganizationProfile))
            .AddAutoMapper(typeof(PostProfile))
            .AddAutoMapper(typeof(EquipmentProfile));
    }
}