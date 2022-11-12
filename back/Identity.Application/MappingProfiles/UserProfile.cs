using AutoMapper;
using Identity.Application.Requests.Commands.Auth;
using Identity.Application.Responses.Auth;
using Identity.Core.Entities;

namespace Identity.Application.MappingProfiles;

public class UserProfile : Profile
{
    public UserProfile()
    {
        CreateMap<User, AuthenticateUserResponse>();
        CreateMap<RegisterUser, User>();
        CreateMap<AuthenticateUser, User>();
    }
}