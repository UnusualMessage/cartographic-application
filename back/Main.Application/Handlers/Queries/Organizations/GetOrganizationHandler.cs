using AutoMapper;
using Main.Application.Requests.Queries;
using Main.Application.Responses;
using Main.Core.Interfaces.Repositories;
using MassTransit.Mediator;

namespace Main.Application.Handlers.Queries.Organizations;

public class GetOrganizationHandler : MediatorRequestHandler<GetOrganization, OrganizationResponse>
{
    private readonly IOrganizationRepository _organizationRepository;
    private readonly IMapper _mapper;

    public GetOrganizationHandler(IOrganizationRepository repository, IMapper mapper)
    {
        _organizationRepository = repository;
        _mapper = mapper;
    }
    
    protected override async Task<OrganizationResponse> Handle(GetOrganization request, CancellationToken cancellationToken)
    {
        return _mapper.Map<OrganizationResponse>(await _organizationRepository.GetByIdAsync(request.Id));
    }
}