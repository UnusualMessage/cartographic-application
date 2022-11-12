using Identity.Application.Responses.User;
using MediatR;

namespace Identity.Application.Requests.Queries.User;

public class GetUsers : IRequest<IEnumerable<UserResponse>>
{
    
}