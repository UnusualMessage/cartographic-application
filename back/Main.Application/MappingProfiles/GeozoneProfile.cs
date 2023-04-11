using AutoMapper;
using Main.Application.Requests.Commands;
using Main.Application.Responses;
using Main.Core.Entities;

namespace Main.Application.MappingProfiles;

public class GeozoneProfile : Profile
{
    public GeozoneProfile()
    {
        CreateMap<Geozone, GeozoneResponse>();
        CreateMap<CreateGeozone, Geozone>();
        CreateMap<UpdateGeozone, Geozone>();
    }
}