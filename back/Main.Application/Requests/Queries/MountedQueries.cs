using Main.Application.Responses;
using MassTransit.Mediator;
using Sieve.Models;

namespace Main.Application.Requests.Queries;

public record GetMounteds(SieveModel Model) : Request<MountedsResponse>;

public record GetMounted(Guid Id) : Request<MountedResponse>;