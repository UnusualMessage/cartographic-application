using AutoMapper;
using Identity.Application.Requests.Commands.User;
using Identity.Application.Responses.User;
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