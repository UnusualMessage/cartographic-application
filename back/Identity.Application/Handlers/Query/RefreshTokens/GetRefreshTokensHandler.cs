using AutoMapper;
using Identity.Application.Requests.Queries;
using Identity.Application.Responses;
using Identity.Core.Interfaces.Repositories;
using MassTransit.Mediator;
using Sieve.Services;

namespace Identity.Application.Handlers.Query.RefreshTokens;

public class GetRefreshTokensHandler : MediatorRequestHandler<GetRefreshTokens, RefreshTokensResponse>
{
    private readonly IRefreshTokenRepository _repository;
    private readonly IMapper _mapper;
    private readonly ISieveProcessor _processor;

    public GetRefreshTokensHandler(IRefreshTokenRepository repository, IMapper mapper, ISieveProcessor processor)
    {
        _repository = repository;
        _mapper = mapper;
        _processor = processor;
    }

    protected override async Task<RefreshTokensResponse> Handle(GetRefreshTokens request, CancellationToken token)
    {
        var tokens = _mapper.Map<IEnumerable<RefreshTokenResponse>>(await _repository.GetAllAsync());
        var response = _processor.Apply(request.Model, tokens.AsQueryable()).AsEnumerable();
        return new RefreshTokensResponse(response);
    }
}