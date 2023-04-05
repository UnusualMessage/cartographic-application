using NetTopologySuite.Geometries;

namespace Main.Core.Properties;

public struct GeozoneFeature
{
    public string Type { get; set; } = "Feature";
    public GeozonePolygon Geometry { get; init; }

    public GeozoneFeature(Coordinate[] coordinates)
    {
        Geometry = new GeozonePolygon(coordinates);
    }
}