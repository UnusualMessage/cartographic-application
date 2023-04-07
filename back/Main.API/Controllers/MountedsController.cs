using Main.Application.Requests.Commands;
using Main.Application.Requests.Queries;
using MassTransit;
using MassTransit.Mediator;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Sieve.Models;

namespace Main.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class MountedsController : ControllerBase
{
    private readonly IMediator _mediator;

    public MountedsController(IMediator mediator)
    {
        _mediator = mediator;
    }

    [AllowAnonymous]
    [HttpGet]
    public async Task<IActionResult> Get([FromQuery] SieveModel model)
    {
        var response = await _mediator.SendRequest(new GetMounteds(model));
        return Ok(response.Items);
    }

    [AllowAnonymous]
    [HttpGet("{id:guid}")]
    public async Task<IActionResult> Get([FromRoute] Guid id)
    {
        return Ok(await _mediator.SendRequest(new GetMounted(id)));
    }

    [AllowAnonymous]
    [HttpPost]
    public async Task<IActionResult> Post([FromBody] CreateMounted request)
    {
        return Ok(await _mediator.SendRequest(request));
    }

    [AllowAnonymous]
    [HttpDelete("{id:guid}")]
    public async Task<IActionResult> Delete([FromRoute] Guid id)
    {
        return Ok(await _mediator.SendRequest(new DeleteMounted(id)));
    }

    [AllowAnonymous]
    [HttpPut]
    public async Task<IActionResult> Put([FromBody] UpdateMounted request)
    {
        return Ok(await _mediator.SendRequest(request));
    }
}