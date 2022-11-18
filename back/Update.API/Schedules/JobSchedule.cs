namespace Update.API.Schedules;

public record JobSchedule(Type JobType, string CronExpression);