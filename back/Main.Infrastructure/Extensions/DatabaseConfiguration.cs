using Main.Core.Interfaces.Repositories;
using Main.Infrastructure.Context;
using Main.Infrastructure.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Main.Infrastructure.Extensions;

public static class DatabaseConfiguration
{
    public static void AddPostgresql(this IServiceCollection services, IConfiguration configuration)
    {
        var connection = configuration["ConnectionStrings:Connection"];
        services.AddDbContext<ApplicationContext>(options =>
            options.UseNpgsql(connection, builder => builder.UseNetTopologySuite()));
    }

    public static void AddRepositories(this IServiceCollection services)
    {
        services.AddScoped<IEmployeeRepository, EmployeeRepository>();
        services.AddScoped<IPostRepository, PostRepository>();
        services.AddScoped<IOrganizationRepository, OrganizationRepository>();
        services.AddScoped<IEquipmentRepository, EquipmentRepository>();
    }
}