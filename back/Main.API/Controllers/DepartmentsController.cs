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
public class DepartmentsController : ControllerBase
{
    private readonly IMediator _mediator;

    public DepartmentsController(IMediator mediator)
    {
        _mediator = mediator;
    }

    [AllowAnonymous]
    [HttpGet]
    public async Task<IActionResult> Get([FromQuery] SieveModel model)
    {
        var employees = await _mediator.SendRequest(new GetDepartments(model));
        return Ok(employees.Departments);
    }

    [AllowAnonymous]
    [HttpGet("{id:guid}")]
    public async Task<IActionResult> Get([FromRoute] Guid id)
    {
        return Ok(await _mediator.SendRequest(new GetDepartment(id)));
    }

    [AllowAnonymous]
    [HttpPost]
    public async Task<IActionResult> Post([FromBody] CreateDepartment request)
    {
        return Ok(await _mediator.SendRequest(request));
    }

    [AllowAnonymous]
    [HttpDelete("{id:guid}")]
    public async Task<IActionResult> Delete([FromRoute] Guid id)
    {
        return Ok(await _mediator.SendRequest(new DeleteDepartment(id)));
    }

    [AllowAnonymous]
    [HttpPut]
    public async Task<IActionResult> Put([FromBody] UpdateDepartment request)
    {
        return Ok(await _mediator.SendRequest(request));
    }
}