using AutoMapper;
using Main.Application.Requests.Commands;
using Main.Application.Responses;
using Main.Core.Entities;
using NetTopologySuite.Geometries;

namespace Main.Application.MappingProfiles;

public class EquipmentProfile : Profile
{
    public EquipmentProfile()
    {
        CreateMap<Equipment, EquipmentResponse>()
            .ForMember(response => response.X, expression => expression.MapFrom(equipment => equipment.Location!.X))
            .ForMember(response => response.Y, expression => expression.MapFrom(equipment => equipment.Location!.Y));

        CreateMap<CreateEquipment, Equipment>()
            .ForMember(equipment => equipment.Location,
                expression => expression.MapFrom(equipment => new Point(equipment.X, equipment.Y)));

        CreateMap<UpdateEquipment, Equipment>();
    }
}