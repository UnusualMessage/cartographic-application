using Main.Application.Requests.Commands;
using Main.Application.Requests.Queries;
using MassTransit;
using MassTransit.Mediator;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Main.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class OrganizationsController : ControllerBase
{
    private readonly IMediator _mediator;

    public OrganizationsController(IMediator mediator)
    {
        _mediator = mediator;
    }

    [AllowAnonymous]
    [HttpGet]
    public async Task<IActionResult> Get()
    {
        var organizations = await _mediator.SendRequest(new GetOrganizations());
        return Ok(organizations.Organizations);
    }
    
    [AllowAnonymous]
    [HttpGet("{id:guid}")]
    public async Task<IActionResult> Get([FromRoute] Guid id)
    {
        return Ok(await _mediator.SendRequest(new GetOrganization(id)));
    }

    [AllowAnonymous]
    [HttpPost]
    public async Task<IActionResult> Post([FromBody] CreateOrganization request)
    {
        return Ok(await _mediator.SendRequest(request));
    }

    [AllowAnonymous]
    [HttpDelete("{id:guid}")]
    public async Task<IActionResult> Delete([FromRoute] Guid id)
    {
        return Ok(await _mediator.SendRequest(new DeleteOrganization(id)));
    }

    [AllowAnonymous]
    [HttpPut]
    public async Task<IActionResult> Put([FromBody] UpdateOrganization request)
    {
        return Ok(await _mediator.SendRequest(request));
    }
}