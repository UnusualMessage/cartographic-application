using Identity.Application.Requests.Commands.User;
using Identity.Application.Requests.Queries.User;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

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

    [Authorize]
    [HttpGet]
    public async Task<IActionResult> Get()
    {
        return Ok(await _mediator.Send(new GetUsers()));
    }

    [Authorize]
    [HttpPost]
    public async Task<IActionResult> Register([FromBody] CreateUser request)
    {
        return Ok(await _mediator.Send(request));
    }
}