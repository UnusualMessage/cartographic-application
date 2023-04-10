using NetTopologySuite.Geometries;
using Shared.Core.Responses;

namespace Main.Application.Responses;

public class PolygonGeometry
{
    public string Type = "Polygon";
    public readonly List<double[]> Coordinates = new();

    public PolygonGeometry(IEnumerable<Coordinate> coordinates)
    {
        foreach (var coordinate in coordinates) Coordinates.Add(new[] { coordinate.X, coordinate.Y });
    }
}

public class PolygonFeature
{
    public string Type = "Feature";
    public PolygonGeometry Geometry { get; }

    public PolygonFeature(IEnumerable<Coordinate> coordinates)
    {
        Geometry = new PolygonGeometry(coordinates);
    }
}

public record GeozonePolygonResponse
    (Guid Id, Guid? GeozoneId) : Response(Id)
{
    public required PointGeometry Feature { get; set; }
}

public record GeozonePolygonsResponse(IEnumerable<GeozonePolygonResponse> Items);