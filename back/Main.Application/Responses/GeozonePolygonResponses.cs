using System.Diagnostics.CodeAnalysis;
using NetTopologySuite.Geometries;
using Shared.Core.Responses;

namespace Main.Application.Responses;

public class PolygonGeometry
{
    public string Type = "Polygon";
    public List<double[]> Coordinates = new();

    public PolygonGeometry(IEnumerable<Coordinate> coordinates)
    {
        foreach (var coordinate in coordinates) Coordinates.Add(new[] { coordinate.X, coordinate.Y });
    }
}

public class PolygonProperties
{
    public required Guid Id { get; init; }
    public Guid? GeozoneId { get; init; }

    [SetsRequiredMembers]
    public PolygonProperties(Guid id, Guid? geozoneId)
    {
        Id = id;
        GeozoneId = geozoneId;
    }
}

public class PolygonFeature
{
    public string Type = "Feature";
    public PolygonGeometry Geometry { get; init; }
    public PolygonProperties Properties { get; init; }

    public PolygonFeature(IEnumerable<Coordinate> coordinates, Guid id, Guid? geozoneId)
    {
        Geometry = new PolygonGeometry(coordinates);
        Properties = new PolygonProperties(id, geozoneId);
    }
}

public record GeozonePolygonResponse
    (Guid Id) : Response(Id)
{
    public required PointGeometry Feature { get; set; }
}

public record GeozonePolygonsResponse(IEnumerable<GeozonePolygonResponse> Items);