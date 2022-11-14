using AutoMapper;
using Identity.Application.Requests.Commands;
using Identity.Application.Responses;
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