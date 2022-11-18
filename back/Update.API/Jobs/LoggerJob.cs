using System.Net.Http.Headers;
using System.Text;
using System.Text.Json;
using Identity.Application.Requests.Commands;
using Identity.Application.Responses;
using Quartz;

namespace Update.API.Jobs;

[DisallowConcurrentExecution]
public class LoggerJob : IJob
{
    private readonly ILogger<LoggerJob> _logger;
    private readonly HttpClient _client = new();

    public LoggerJob(ILogger<LoggerJob> logger)
    {
        _logger = logger;
    }

    public async Task<AuthenticateUserResponse?> Authenticate()
    {
        var message = new AuthenticateUser("Admin", "20102001", null);

        var serializedMessage = JsonSerializer.Serialize(message);

        var request = new HttpRequestMessage(HttpMethod.Post, "https://localhost:5443/api/Auth/authenticate");

        request.Headers.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
        request.Content = new StringContent(serializedMessage, Encoding.UTF8);
        request.Content.Headers.ContentType = new MediaTypeHeaderValue("application/json");

        var response = await _client.SendAsync(request);
        response.EnsureSuccessStatusCode();

        var str = await response.Content.ReadAsStringAsync();
        var result =
            JsonSerializer.Deserialize<AuthenticateUserResponse>(str,
                new JsonSerializerOptions(JsonSerializerDefaults.Web));
        return result;
    }

    public async Task Execute(IJobExecutionContext context)
    {
        var authenticationResult = await Authenticate();

        if (authenticationResult is not null)
        {
            var request = new HttpRequestMessage(HttpMethod.Get, "https://localhost:5443/api/Users");
            request.Headers.Authorization = new AuthenticationHeaderValue("Bearer", authenticationResult.AccessToken);

            var response = await _client.SendAsync(request);
            response.EnsureSuccessStatusCode();

            var result = await response.Content.ReadAsStringAsync();

            _logger.LogInformation(result);
        }
    }
}