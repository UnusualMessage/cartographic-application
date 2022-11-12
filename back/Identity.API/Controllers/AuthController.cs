using Identity.Application.Requests.Commands.User;
using Identity.Application.Requests.Queries.User;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Identity.API.Controllers;

    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IMediator _mediator;

        public AuthController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [AllowAnonymous]
        [HttpGet("access")]
        public async Task<IActionResult> GetAccessToken()
        {
            var request = new GetAccessToken();
            var refreshToken = Request.Cookies["refreshToken"];
            
            request.IpAddress = GetIpAddress();
            request.RefreshToken = refreshToken;

            var response = await _mediator.Send(request);
            
            SetTokenCookie(response.RefreshToken ?? "");
            
            return Ok(response);
        }

        [Authorize]
        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterUser request)
        {
            request.IpAddress = GetIpAddress();

            var response = await _mediator.Send(request);

            SetTokenCookie(response.RefreshToken ?? "");

            return Ok(response);

        }

        [AllowAnonymous]
        [HttpPost("authenticate")]
        public async Task<IActionResult> Authenticate([FromBody] AuthenticateUser request)
        {
            request.IpAddress = GetIpAddress();

            var response = await _mediator.Send(request);

            SetTokenCookie(response.RefreshToken ?? "");

            return Ok(response);
        }

        [AllowAnonymous]
        [HttpPost("refresh")]
        public async Task<IActionResult> Refresh([FromBody] RefreshUser request)
        {
            var refreshToken = Request.Cookies["refreshToken"];
            request.IpAddress = GetIpAddress();

            request.RefreshToken = refreshToken;

            var response = await _mediator.Send(request);

            SetTokenCookie(response.RefreshToken ?? "");
            
            return Ok(response);
        }

        [AllowAnonymous]
        [HttpPost("revoke")]
        public async Task<IActionResult> Revoke([FromBody] RevokeUser request)
        {
            var refreshToken = Request.Cookies["refreshToken"];
            request.IpAddress = GetIpAddress();

            request.RefreshToken = refreshToken;

            return Ok(await _mediator.Send(request));
        }

        private string? GetIpAddress()
        {
            if (Request.Headers.ContainsKey("X-Forwarded-For"))
            {
                return Request.Headers["X-Forwarded-For"];
            }

            return HttpContext.Connection.RemoteIpAddress?.MapToIPv4().ToString();
        }

        private void SetTokenCookie(string token)
        {
            var cookieOptions = new CookieOptions
            {
                Expires = DateTime.UtcNow.AddDays(7),
                IsEssential = true
            };

            Response.Cookies.Append("refreshToken", token, cookieOptions);
        }
    }