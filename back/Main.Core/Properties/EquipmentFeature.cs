namespace Main.Core.Properties;

public class EquipmentFeature
{
    public string Type { get; set; } = "Feature";
    public EquipmentPoint Geometry { get; init; }

    public EquipmentFeature(double x, double y)
    {
        Geometry = new EquipmentPoint(x, y);
    }
}