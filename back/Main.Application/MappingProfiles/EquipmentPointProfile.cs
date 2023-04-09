using AutoMapper;
using Main.Application.Requests.Commands;
using Main.Application.Responses;
using Main.Core.Entities.Geometry;
using NetTopologySuite.Geometries;

namespace Main.Application.MappingProfiles;

public class EquipmentPointProfile : Profile
{
    public EquipmentPointProfile()
    {
        CreateMap<EquipmentPoint, EquipmentPointResponse>()
            .ForMember(response => response.Feature,
                expression =>
                    expression.MapFrom(equipment => new PointFeature(equipment.Geometry.X, equipment.Geometry.Y,
                        equipment.Id, equipment.EquipmentId)));

        CreateMap<CreateEquipmentPoint, EquipmentPoint>()
            .ForMember(equipment => equipment.Geometry,
                expression => expression.MapFrom((source, _) =>
                {
                    var equipmentFeature = new Point(source.Geometry.Coordinates[0],
                        source.Geometry.Coordinates[1]);

                    return equipmentFeature;
                }));

        CreateMap<UpdateEquipmentPoint, EquipmentPoint>()
            .ForMember(equipment => equipment.Geometry,
                expression => expression.MapFrom((source, _) =>
                {
                    var equipmentFeature = new Point(source.Geometry.Coordinates[0],
                        source.Geometry.Coordinates[1]);

                    return equipmentFeature;
                }));
    }
}