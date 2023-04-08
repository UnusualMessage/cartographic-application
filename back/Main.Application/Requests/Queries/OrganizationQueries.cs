using Main.Application.Responses;
using MassTransit.Mediator;
using Sieve.Models;

namespace Main.Application.Requests.Queries;

public record GetOrganizations(SieveModel Model) : Request<OrganizationsResponse>;

public record GetOrganization(Guid Id) : Request<OrganizationResponse>;