namespace Shared.Core.Responses;

public record ErrorResponse(string Message, bool Error = true);
