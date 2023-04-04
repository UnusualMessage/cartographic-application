using Main.Core.Entities;
using Shared.Core.Responses;

namespace Main.Application.Responses;

public record PostResponse(Guid Id, string Title, Organization Organization, Department Department) : Response(Id);

public record PostsResponse(IEnumerable<PostResponse> Posts); 