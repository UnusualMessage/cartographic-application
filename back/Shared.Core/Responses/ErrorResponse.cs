namespace Shared.Core.Responses;

public class ErrorResponse
{
    public string Message { get; }
    public bool Error { get; init; } = true;

    public ErrorResponse(string message)
    {
        Message = message;
    }
}