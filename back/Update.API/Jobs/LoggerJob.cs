using System.Text;
using System.Text.Json;
using Quartz;

namespace Update.API.Jobs;

[DisallowConcurrentExecution]
public class LoggerJob : IJob
{
    private readonly ILogger<LoggerJob> _logger;

    public LoggerJob(ILogger<LoggerJob> logger)
    {
        _logger = logger;
    }

    public async Task Execute(IJobExecutionContext context)
    {
        var client = new HttpClient();

        var request = new
        {
            Login = "Hello",
            Password = "20102001"
        };

        var serializedRequest = JsonSerializer.Serialize(request);
        var requestContent = new StringContent(serializedRequest, Encoding.UTF8, "application/json");

        var response = await client.GetAsync("https://localhost:5444/api/Users");
        response.EnsureSuccessStatusCode();

        var content = await response.Content.ReadAsStringAsync();

        _logger.LogInformation(content);
    }
}