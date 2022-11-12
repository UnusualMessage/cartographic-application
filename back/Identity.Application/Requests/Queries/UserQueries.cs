using Identity.Application.Responses;
using MediatR;

namespace Identity.Application.Requests.Queries;

public record GetUsers : IRequest<IEnumerable<UserResponse>>;