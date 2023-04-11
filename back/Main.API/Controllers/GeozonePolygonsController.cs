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
public class GeozonePolygonsController : ControllerBase
{
    private readonly IMediator _mediator;

    public GeozonePolygonsController(IMediator mediator)
    {
        _mediator = mediator;
    }

    [AllowAnonymous]
    [HttpGet]
    public async Task<IActionResult> Get([FromQuery] SieveModel model)
    {
        var response = await _mediator.SendRequest(new GetGeozonePolygons(model));
        return Ok(response.Items);
    }

    [AllowAnonymous]
    [HttpGet("{id:guid}")]
    public async Task<IActionResult> Get([FromRoute] Guid id)
    {
        return Ok(await _mediator.SendRequest(new GetGeozonePolygon(id)));
    }

    [AllowAnonymous]
    [HttpPost]
    public async Task<IActionResult> Post([FromBody] CreateGeozonePolygon request)
    {
        return Ok(await _mediator.SendRequest(request));
    }

    [AllowAnonymous]
    [HttpDelete("{id:guid}")]
    public async Task<IActionResult> Delete([FromRoute] Guid id)
    {
        return Ok(await _mediator.SendRequest(new DeleteGeozonePolygon(id)));
    }

    [AllowAnonymous]
    [HttpPut]
    public async Task<IActionResult> Put([FromBody] UpdateGeozonePolygon request)
    {
        return Ok(await _mediator.SendRequest(request));
    }
}