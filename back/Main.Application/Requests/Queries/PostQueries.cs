using Main.Application.Responses;
using MassTransit.Mediator;

namespace Main.Application.Requests.Queries;

public record GetPosts() : Request<PostsResponse>;

public record GetPost(Guid Id) : Request<PostResponse>;