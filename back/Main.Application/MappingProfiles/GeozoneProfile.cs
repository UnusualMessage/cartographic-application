using AutoMapper;
using Main.Application.Requests.Commands;
using Main.Application.Responses;
using Main.Core.Entities;
using Main.Core.Properties;
using NetTopologySuite.Geometries;

namespace Main.Application.MappingProfiles;

public class GeozoneProfile : Profile
{
    public GeozoneProfile()
    {
        CreateMap<Geozone, GeozoneResponse>()
            .ForMember(response => response.Feature,
                expression =>
                    expression.MapFrom((equipment, _) =>
                    {
                        if (equipment.Feature is null) return null;

                        return new GeozoneFeature(equipment.Feature.Coordinates);
                    }));

        CreateMap<CreateGeozone, Geozone>()
            .ForMember(equipment => equipment.Feature,
                expression => expression.MapFrom((source, _) =>
                {
                    if (source.Feature is null) return null;

                    var coordinates = source.Feature.Geometry.Coordinates;
                    var geometryFactory = new GeometryFactory();

                    return geometryFactory.CreatePolygon(coordinates
                        .Select(coordinate => new Coordinate(coordinate[0], coordinate[1])).ToArray());
                }));

        CreateMap<UpdateGeozone, Geozone>();
    }
}