using AutoMapper;
using Identity.Application.Responses;
using Identity.Core.Entities;

namespace Identity.Application.MappingProfiles;

public class RefreshTokenProfile : Profile
{
    public RefreshTokenProfile()
    {
        CreateMap<RefreshToken, RefreshTokenResponse>();
    }
}