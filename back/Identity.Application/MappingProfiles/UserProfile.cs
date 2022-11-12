using AutoMapper;
using Identity.Application.Requests.Commands.Auth;
using Identity.Application.Requests.Commands.User;
using Identity.Application.Responses.Auth;
using Identity.Application.Responses.User;
using Identity.Core.Entities;

namespace Identity.Application.MappingProfiles;

public class UserProfile : Profile
{
    public UserProfile()
    {
        CreateMap<User, UserResponse>();
        CreateMap<User, AuthenticateUserResponse>();
        CreateMap<CreateUser, User>();
        CreateMap<AuthenticateUser, User>();
    }
}