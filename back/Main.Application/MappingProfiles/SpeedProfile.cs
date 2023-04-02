using AutoMapper;
using Main.Application.Requests.Commands;
using Main.Application.Responses;
using Main.Core.Entities;

namespace Main.Application.MappingProfiles;

public class SpeedProfile : Profile
{
    public SpeedProfile()
    {
        CreateMap<Speed, SpeedResponse>();
        CreateMap<CreateSpeed, Speed>();
        CreateMap<UpdateSpeed, Speed>();
    }
}