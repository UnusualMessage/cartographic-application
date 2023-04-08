using AutoMapper;
using Main.Application.Requests.Queries;
using Main.Application.Responses;
using Main.Core.Interfaces.Repositories;
using MassTransit.Mediator;
using Sieve.Services;

namespace Main.Application.Handlers.Queries.Organizations;

public class GetOrganizationsHandler : MediatorRequestHandler<GetOrganizations, OrganizationsResponse>
{
    private readonly IOrganizationRepository _repository;
    private readonly ISieveProcessor _processor;
    private readonly IMapper _mapper;

    public GetOrganizationsHandler(IOrganizationRepository repository, IMapper mapper, ISieveProcessor processor)
    {
        _repository = repository;
        _mapper = mapper;
        _processor = processor;
    }
    
    protected override async Task<OrganizationsResponse> Handle(GetOrganizations request, CancellationToken cancellationToken)
    {
        var organizations = _mapper.Map<IEnumerable<OrganizationResponse>>(await _repository.GetAllAsync());
        var response = _processor.Apply(request.Model, organizations.AsQueryable()).AsEnumerable();
        return new OrganizationsResponse(response);
    }
}