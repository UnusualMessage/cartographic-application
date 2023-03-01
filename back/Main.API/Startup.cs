using Main.API.Extensions;
using Serilog;
using Shared.API.Middlewares;

namespace Main.API;

public class Startup
{
    public Startup(IConfiguration configuration)
    {
        Configuration = configuration;

        Log.Logger = new LoggerConfiguration()
            .ReadFrom.Configuration(configuration)
            .CreateLogger();
    }

    private IConfiguration Configuration { get; }

    public void ConfigureServices(IServiceCollection services)
    {
        services.AddApi(Configuration);
        services.AddApplication();
        services.AddInfrastructure(Configuration);
    }

    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
        if (env.IsDevelopment())
        {
            app.UseDeveloperExceptionPage();
            app.UseSwagger();
            app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "Main APIv1"));

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

        app.UseRouting();

        app.UseAuthentication();
        app.UseAuthorization();

        app.UseEndpoints(endpoints => { endpoints.MapControllers(); });
    }
}