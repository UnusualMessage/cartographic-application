using Identity.API.Controllers.Base;
using Identity.Application.Requests.Commands.User;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Identity.API.Controllers;

    [Route("api/[controller]")]
    public class UsersController : AuthControllerBase
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
            var response = await _mediator.Send(null);

            return Ok(response);
        }

        [Authorize]
        [HttpPost]
        public async Task<IActionResult> Register([FromBody] RegisterUser request)
        {
            request.IpAddress = GetIpAddress();

            var response = await _mediator.Send(request);

            SetTokenCookie(response.RefreshToken ?? "");

            return Ok(response);

        }
    }