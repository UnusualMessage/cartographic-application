using NetTopologySuite.Geometries;

namespace Main.Core.Properties;

public struct GeozonePolygon
{
    public string Type { get; set; } = "Polygon";
    public List<double[]> Coordinates { get; init; } = new();

    public GeozonePolygon(Coordinate[] coordinates)
    {
        foreach (var coordinate in coordinates) Coordinates.Add(new[] { coordinate.X, coordinate.Y });
    }
}