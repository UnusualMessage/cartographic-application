using AutoMapper;
using Main.Application.Requests.Commands;
using Main.Application.Responses;
using Main.Core.Entities;
using Main.Core.Interfaces.Repositories;
using MassTransit.Mediator;

namespace Main.Application.Handlers.Commands.Organizations;

public class CreateOrganizationHandler : MediatorRequestHandler<CreateOrganization, OrganizationResponse>
{
    private readonly IOrganizationRepository _organizationRepository;
    private readonly IMapper _mapper;

    public CreateOrganizationHandler(IOrganizationRepository repository, IMapper mapper)
    {
        _organizationRepository = repository;
        _mapper = mapper;
    }
    
    protected override async Task<OrganizationResponse> Handle(CreateOrganization request, CancellationToken cancellationToken)
    {
        return _mapper.Map<OrganizationResponse>(await _organizationRepository.AddAsync(_mapper.Map<Organization>(request)));
    }
}