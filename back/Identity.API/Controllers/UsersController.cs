using Identity.Application.Requests.Commands;
using Identity.Application.Requests.Queries;
using MassTransit;
using MassTransit.Mediator;
using Microsoft.AspNetCore.Mvc;
using Shared.API.Filters.Roles;

namespace Identity.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UsersController : ControllerBase
{
    private readonly IMediator _mediator;

    public UsersController(IMediator mediator)
    {
        _mediator = mediator;
    }

    [Admin]
    [HttpGet]
    public async Task<IActionResult> Get()
    {
        var response = await _mediator.SendRequest(new GetUsers());
        return Ok(response.Users);
    }

    [Admin]
    [HttpPost]
    public async Task<IActionResult> Register([FromBody] CreateUser request)
    {
        return Ok(await _mediator.SendRequest(request));
    }
}