using Entry.API.Middlewares;
using Microsoft.AspNetCore.Mvc;
using Ocelot.DependencyInjection;
using Ocelot.Middleware;

namespace Entry.API;

public class Startup
{
    public Startup(IConfiguration configuration)
    {
        Configuration = configuration;
    }

    private IConfiguration Configuration { get; }

    public void ConfigureServices(IServiceCollection services)
    {
        services.AddCors();
        services.AddOcelot(Configuration);

        /*services.AddSpaStaticFiles(configuration =>
        {
            configuration.RootPath = "wwwroot/";
        });*/

        services.AddControllers(options =>
        {
            options.Filters.Add(new ProducesAttribute("application/json"));
        });

    }

    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
        if (env.IsDevelopment())
        {
            app.UseDeveloperExceptionPage();

            app.UseCors(builder => builder
                .WithOrigins("http://localhost:3000")
                .AllowAnyMethod()
                .AllowAnyHeader()
                .AllowCredentials()
            );
        }
        else
        {
            app.UseHsts();
        }

        app.UseHttpsRedirection();
        app.UseMiddleware<ExceptionMiddleware>();

        app.UseDefaultFiles();
        app.UseStaticFiles();
        /*app.UseSpaStaticFiles();*/

        app.UseRouting();
        app.UseWebSockets();
        app.UseOcelot();

        app.UseAuthentication();
        app.UseAuthorization();

        app.UseEndpoints(endpoints =>
        {
            endpoints.MapControllers();
        });

        /*app.UseSpa(spa => {  });*/
    }
}