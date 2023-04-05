using AutoMapper;
using Main.Application.Requests.Commands;
using Main.Application.Responses;
using Main.Core.Entities;

namespace Main.Application.MappingProfiles;

public class EquipmentTypeProfile : Profile
{
    public EquipmentTypeProfile()
    {
        CreateMap<EquipmentType, EquipmentTypeResponse>();
        CreateMap<CreateEquipmentType, EquipmentType>();
        CreateMap<UpdateEquipmentType, EquipmentType>();
    }
}