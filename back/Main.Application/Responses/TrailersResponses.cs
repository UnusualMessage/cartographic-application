using Shared.Core.Responses;

namespace Main.Application.Responses;

public record TrailerResponse(Guid Id, string Title) : Response(Id);

public record TrailersResponse(IEnumerable<TrailerResponse> Trailers);