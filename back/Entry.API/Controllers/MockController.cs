using Microsoft.AspNetCore.Mvc;

namespace Entry.API.Controllers;

[Route("api/[controller]")]
[ApiController]
public class MockController : ControllerBase
{
    [HttpPost]
    public IActionResult Post()
    {
        return Ok();
    }
}