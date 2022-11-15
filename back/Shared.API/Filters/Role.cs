using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc.Filters;
using Shared.Core.Exceptions;

namespace Shared.API.Filters;

public class Role : AuthorizeAttribute, IAuthorizationFilter
{
    private readonly string _role;
    
    public Role(string role)
    {
        _role = role;
    }
    
    public void OnAuthorization(AuthorizationFilterContext context)
    {
        var suit = context.HttpContext.User.HasClaim(ClaimTypes.Role, _role);

        if (suit)
        {
            return;
        }

        throw new ForbiddenException("Нет прав!");
    }
}