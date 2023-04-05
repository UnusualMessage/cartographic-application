namespace Main.Core.Properties;

public struct Feature
{
    public string Type { get; set; } = "Feature";
    public Geometry Geometry { get; init; }

    public Feature(double x, double y)
    {
        Geometry = new Geometry(x, y);
    }
}