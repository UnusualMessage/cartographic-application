using AutoMapper;
using Main.Application.Requests.Commands;
using Main.Application.Responses;
using Main.Core.Entities.Geometry;
using NetTopologySuite.Geometries;

namespace Main.Application.MappingProfiles;

public class GeozonePolygonProfile : Profile
{
    public GeozonePolygonProfile()
    {
        CreateMap<GeozonePolygon, GeozonePolygonResponse>()
            .ForMember(response => response.Feature,
                expression =>
                    expression.MapFrom(polygon =>
                        new PolygonFeature(polygon.Geometry.Coordinates)));

        CreateMap<CreateGeozonePolygon, GeozonePolygon>()
            .ForMember(equipment => equipment.Geometry,
                expression => expression.MapFrom((source, _) =>
                {
                    var coordinates = source.Geometry.Coordinates;
                    var geometryFactory = new GeometryFactory();

                    return geometryFactory.CreatePolygon(coordinates
                        .Select(coordinate => new Coordinate(coordinate[0], coordinate[1])).ToArray());
                }));

        CreateMap<UpdateGeozonePolygon, GeozonePolygon>()
            .ForMember(equipment => equipment.Geometry,
                expression => expression.MapFrom((source, _) =>
                {
                    var coordinates = source.Geometry.Coordinates;
                    var geometryFactory = new GeometryFactory();

                    return geometryFactory.CreatePolygon(coordinates
                        .Select(coordinate => new Coordinate(coordinate[0], coordinate[1])).ToArray());
                }));
    }
}