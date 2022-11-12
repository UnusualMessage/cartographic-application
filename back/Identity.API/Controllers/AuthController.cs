using Identity.Application.Requests.Commands;
using Identity.Application.Requests.Queries;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Identity.API.Controllers;

[ApiController]
[Route("api/[controller]")]
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
        var refreshToken = Request.Cookies["refreshToken"];
        var request = new GetAccessToken(refreshToken);

        var response = await _mediator.Send(request);

        SetTokenCookie(response.RefreshToken ?? "");

        return Ok(response);
    }

    [AllowAnonymous]
    [HttpPost("authenticate")]
    public async Task<IActionResult> Authenticate([FromBody] AuthenticateUser request)
    {
        var response = await _mediator.Send(request with { IpAddress = GetIpAddress() });

        SetTokenCookie(response.RefreshToken ?? "");

        return Ok(response);
    }

    [AllowAnonymous]
    [HttpPost("refresh")]
    public async Task<IActionResult> Refresh()
    {
        var refreshToken = Request.Cookies["refreshToken"];
        var request = new RefreshUser(IpAddress: GetIpAddress(), RefreshToken: refreshToken);

        var response = await _mediator.Send(request);

        SetTokenCookie(response.RefreshToken ?? "");

        return Ok(response);
    }

    [AllowAnonymous]
    [HttpPost("revoke")]
    public async Task<IActionResult> Revoke()
    {
        var refreshToken = Request.Cookies["refreshToken"];
        var request = new RevokeUser(IpAddress: GetIpAddress(), RefreshToken: refreshToken);

        return Ok(await _mediator.Send(request));
    }

    private string? GetIpAddress()
    {
        if (Request.Headers.ContainsKey("X-Forwarded-For")) return Request.Headers["X-Forwarded-For"];

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