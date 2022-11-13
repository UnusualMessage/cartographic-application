using Main.Application.Responses;
using MassTransit.Mediator;

namespace Main.Application.Requests.Queries;

public record GetOrganizations() : Request<OrganizationsResponse>;

public record GetOrganization(Guid Id) : Request<OrganizationResponse>;