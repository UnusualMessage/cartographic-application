using Quartz;
using Quartz.Impl;
using Quartz.Spi;
using Update.API.Jobs;
using Update.API.Schedules;
using Update.API.Services;

namespace Update.API.Extensions;

public static class MicroserviceConfiguration
{
    public static void AddMicroservice(this IServiceCollection services)
    {
        services.AddCors();

        services.AddSingleton<IJobFactory, JobFactory>();
        services.AddSingleton<ISchedulerFactory, StdSchedulerFactory>();

        services.AddSingleton<LoggerJob>();
        services.AddSingleton(new JobSchedule(typeof(LoggerJob), "0/5 * * * * ?"));

        services.AddHostedService<HostedService>();
    }
}