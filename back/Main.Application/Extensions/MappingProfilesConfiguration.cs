using Main.Application.MappingProfiles;
using Main.Application.Responses;
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
            .AddAutoMapper(typeof(EquipmentProfile))
            .AddAutoMapper(typeof(DepartmentProfile))
            .AddAutoMapper(typeof(SpeedProfile))
            .AddAutoMapper(typeof(TrailerResponse))
            .AddAutoMapper(typeof(EquipmentTypeProfile))
            .AddAutoMapper(typeof(GeozoneProfile))
            .AddAutoMapper(typeof(MountedProfile))
            .AddAutoMapper(typeof(GeozonePolygonProfile))
            .AddAutoMapper(typeof(EquipmentPointProfile));
    }
}