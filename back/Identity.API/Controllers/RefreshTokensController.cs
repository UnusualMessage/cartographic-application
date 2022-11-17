using Identity.Application.Requests.Queries;
using MassTransit;
using MassTransit.Mediator;
using Microsoft.AspNetCore.Mvc;
using Shared.API.Filters.Roles;
using Sieve.Models;

namespace Identity.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class RefreshTokensController : ControllerBase
{
    private readonly IMediator _mediator;

    public RefreshTokensController(IMediator mediator)
    {
        _mediator = mediator;
    }

    [Admin]
    [HttpGet]
    public async Task<IActionResult> Get([FromQuery] SieveModel model)
    {
        var response = await _mediator.SendRequest(new GetRefreshTokens(model));
        return Ok(response.RefreshTokens);
    }
}