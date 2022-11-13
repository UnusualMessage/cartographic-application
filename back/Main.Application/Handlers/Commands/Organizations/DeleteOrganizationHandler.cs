﻿using AutoMapper;
using Main.Application.Requests.Commands;
using Main.Application.Responses;
using Main.Core.Interfaces.Repositories;
using MassTransit.Mediator;

namespace Main.Application.Handlers.Commands.Organizations;

public class DeleteOrganizationHandler : MediatorRequestHandler<DeleteOrganization, OrganizationResponse>
{
    private readonly IOrganizationRepository _organizationRepository;
    private readonly IMapper _mapper;

    public DeleteOrganizationHandler(IOrganizationRepository repository, IMapper mapper)
    {
        _organizationRepository = repository;
        _mapper = mapper;
    }
    
    protected override async Task<OrganizationResponse> Handle(DeleteOrganization request, CancellationToken cancellationToken)
    {
        return _mapper.Map<OrganizationResponse>(await _organizationRepository.DeleteByIdAsync(request.Id));
    }
}