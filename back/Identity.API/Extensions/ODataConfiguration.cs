using Identity.Application.Responses;
using Microsoft.AspNetCore.OData;
using Microsoft.OData.Edm;
using Microsoft.OData.ModelBuilder;

namespace Identity.API.Extensions;

public static class ODataConfiguration
{
    private static IEdmModel GetModel()
    {
        ODataConventionModelBuilder builder = new();
        builder.EntitySet<UserResponse>("Users");
        return builder.GetEdmModel();
    }

    public static void AddODataControllers(this IServiceCollection services)
    {
        services
            .AddControllers()
            .AddOData(options => options
                .AddRouteComponents("/api/sieved", GetModel())
                .Select()
                .Filter()
                .OrderBy()
                .SetMaxTop(20)
                .Count()
                .Expand());
    }
}