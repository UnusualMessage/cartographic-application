using AutoMapper;
using Main.Application.Requests.Queries;
using Main.Application.Responses;
using Main.Core.Interfaces.Repositories;
using MassTransit.Mediator;

namespace Main.Application.Handlers.Queries.Organizations;

public class GetOrganizationsHandler : MediatorRequestHandler<GetOrganizations, OrganizationsResponse>
{
    private readonly IOrganizationRepository _organizationRepository;
    private readonly IMapper _mapper;

    public GetOrganizationsHandler(IOrganizationRepository repository, IMapper mapper)
    {
        _organizationRepository = repository;
        _mapper = mapper;
    }
    
    protected override async Task<OrganizationsResponse> Handle(GetOrganizations request, CancellationToken cancellationToken)
    {
        var organizations = _mapper.Map<IEnumerable<OrganizationResponse>>(await _organizationRepository.GetAllAsync());
        return new OrganizationsResponse(organizations);
    }
}