using AutoMapper;
using Main.Application.Requests.Commands;
using Main.Application.Responses;
using Main.Core.Entities;
using Main.Core.Properties;
using NetTopologySuite.Geometries;

namespace Main.Application.MappingProfiles;

public class EquipmentProfile : Profile
{
    public EquipmentProfile()
    {
        CreateMap<Equipment, EquipmentResponse>()
            .ForMember(response => response.Feature,
                expression =>
                    expression.MapFrom((equipment, _) =>
                    {
                        if (equipment.Feature is null) return null;

                        var feature = new EquipmentFeature(equipment.Feature.X, equipment.Feature.Y);
                        return feature;
                    }));

        CreateMap<CreateEquipment, Equipment>()
            .ForMember(equipment => equipment.Feature,
                expression => expression.MapFrom((source, _) =>
                {
                    if (source.Feature is null) return null;

                    var equipmentFeature = new Point(source.Feature.Geometry.Coordinates[0],
                        source.Feature.Geometry.Coordinates[1]);

                    return equipmentFeature;
                }));

        CreateMap<UpdateEquipment, Equipment>();
    }
}