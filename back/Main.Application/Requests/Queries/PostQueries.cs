using Main.Application.Responses;
using MassTransit.Mediator;
using Sieve.Models;

namespace Main.Application.Requests.Queries;

public record GetPosts(SieveModel Model) : Request<PostsResponse>;

public record GetPost(Guid Id) : Request<PostResponse>;