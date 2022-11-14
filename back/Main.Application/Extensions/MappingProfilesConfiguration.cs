using Main.Application.MappingProfiles;
using Microsoft.Extensions.DependencyInjection;

namespace Main.Application.Extensions;

public static class MappingProfilesConfiguration
{
    public static void AddMappingProfiles(this IServiceCollection services)
    {
       services.AddAutoMapper(typeof(EmployeeProfile));
       services.AddAutoMapper(typeof(OrganizationProfile));
       services.AddAutoMapper(typeof(PostProfile));
    }
}