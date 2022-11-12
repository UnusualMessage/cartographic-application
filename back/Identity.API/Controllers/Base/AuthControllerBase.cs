using Microsoft.AspNetCore.Mvc;

namespace Identity.API.Controllers.Base;

[ApiController]
public class AuthControllerBase : ControllerBase
{
    protected string? GetIpAddress()
    {
        if (Request.Headers.ContainsKey("X-Forwarded-For"))
        {
            return Request.Headers["X-Forwarded-For"];
        }

        return HttpContext.Connection.RemoteIpAddress?.MapToIPv4().ToString();
    }

    protected void SetTokenCookie(string token)
    {
        var cookieOptions = new CookieOptions
        {
            Expires = DateTime.UtcNow.AddDays(7),
            IsEssential = true
        };

        Response.Cookies.Append("refreshToken", token, cookieOptions);
    }
}