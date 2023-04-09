using AutoMapper;
using Main.Application.Requests.Commands;
using Main.Application.Responses;
using Main.Core.Entities;

namespace Main.Application.MappingProfiles;

public class EquipmentProfile : Profile
{
    public EquipmentProfile()
    {
        CreateMap<Equipment, EquipmentResponse>();
        CreateMap<CreateEquipment, Equipment>();
        CreateMap<UpdateEquipment, Equipment>();
    }
}