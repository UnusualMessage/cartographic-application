using AutoMapper;
using Main.Application.Requests.Commands;
using Main.Application.Responses;
using Main.Core.Entities;

namespace Main.Application.MappingProfiles;

public class MountedProfile : Profile
{
    public MountedProfile()
    {
        CreateMap<Mounted, MountedResponse>();
        CreateMap<CreateMounted, Mounted>();
        CreateMap<UpdateMounted, Mounted>();
    }
}