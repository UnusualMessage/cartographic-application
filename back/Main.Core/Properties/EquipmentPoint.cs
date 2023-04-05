namespace Main.Core.Properties;

public struct EquipmentPoint
{
    public string Type { get; set; } = "Point";
    public double[] Coordinates { get; init; } = new double[2];

    public EquipmentPoint(double x, double y)
    {
        Coordinates[0] = x;
        Coordinates[1] = y;
    }
}