using AutoMapper;
using Identity.Application.Requests.Commands.UserCommands;
using Identity.Application.Responses.UserResponses;
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