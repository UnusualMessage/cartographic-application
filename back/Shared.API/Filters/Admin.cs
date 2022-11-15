using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace Shared.API.Filters;

public class Admin : AuthorizeAttribute, IAuthorizationFilter
{
    public void OnAuthorization(AuthorizationFilterContext context)
    {
        var isAdmin = context.HttpContext.User.HasClaim(ClaimTypes.Role, "Admin");

        if (isAdmin)
        {
            return;
        }

        context.Result = new ForbidResult();
    }
}