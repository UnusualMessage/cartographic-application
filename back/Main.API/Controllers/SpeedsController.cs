﻿using Main.Application.Requests.Commands;
using Main.Application.Requests.Queries;
using MassTransit;
using MassTransit.Mediator;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Sieve.Models;

namespace Main.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class SpeedsController : ControllerBase
{
    private readonly IMediator _mediator;

    public SpeedsController(IMediator mediator)
    {
        _mediator = mediator;
    }

    [AllowAnonymous]
    [HttpGet]
    public async Task<IActionResult> Get([FromQuery] SieveModel model)
    {
        var speeds = await _mediator.SendRequest(new GetSpeeds(model));
        return Ok(speeds.Speeds);
    }

    [AllowAnonymous]
    [HttpGet("{id:guid}")]
    public async Task<IActionResult> Get([FromRoute] Guid id)
    {
        return Ok(await _mediator.SendRequest(new GetSpeed(id)));
    }

    [AllowAnonymous]
    [HttpPost]
    public async Task<IActionResult> Post([FromBody] CreateSpeed request)
    {
        return Ok(await _mediator.SendRequest(request));
    }

    [AllowAnonymous]
    [HttpDelete("{id:guid}")]
    public async Task<IActionResult> Delete([FromRoute] Guid id)
    {
        return Ok(await _mediator.SendRequest(new DeleteSpeed(id)));
    }

    [AllowAnonymous]
    [HttpPut]
    public async Task<IActionResult> Put([FromBody] UpdateSpeed request)
    {
        return Ok(await _mediator.SendRequest(request));
    }
}