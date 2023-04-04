using Shared.Core.Responses;

namespace Main.Application.Responses;

public record SpeedResponse(Guid Id, string Title, int Min, int Max, int TimeLimit) : Response(Id);

public record SpeedsResponse(IEnumerable<SpeedResponse> Speeds);