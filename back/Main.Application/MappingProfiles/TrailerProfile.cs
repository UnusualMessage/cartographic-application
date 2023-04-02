using AutoMapper;
using Main.Application.Requests.Commands;
using Main.Application.Responses;
using Main.Core.Entities;

namespace Main.Application.MappingProfiles;

public class TrailerProfile : Profile
{
    public TrailerProfile()
    {
        CreateMap<Trailer, TrailerResponse>();
        CreateMap<CreateTrailer, Trailer>();
        CreateMap<UpdateTrailer, Trailer>();
    }
}