using Microsoft.AspNetCore.Mvc;

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

        /*services.AddSpaStaticFiles(configuration =>
        {
            configuration.RootPath = "wwwroot/";
        });*/
        
        services.AddReverseProxy()
            .LoadFromConfig(Configuration.GetSection("ReverseProxy"));

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

        app.UseDefaultFiles();
        app.UseStaticFiles();
        /*app.UseSpaStaticFiles();*/

        app.UseRouting();
        app.UseWebSockets();

        app.UseAuthentication();
        app.UseAuthorization();

        app.UseEndpoints(endpoints =>
        {
            endpoints.MapControllers();
            endpoints.MapReverseProxy();
        });

        /*app.UseSpa(spa => {  });*/
    }
}