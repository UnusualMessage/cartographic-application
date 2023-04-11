using Shared.Core.Responses;

namespace Main.Application.Responses;

public class PointGeometry
{
    public string Type { get; set; } = "Point";
    public double[] Coordinates { get; init; }

    public PointGeometry(double[] coordinates)
    {
        Coordinates = coordinates;
    }
}

public class PointFeature
{
    public string Type { get; set; } = "Feature";
    public PointGeometry Geometry { get; init; }

    public PointFeature(double x, double y)
    {
        Geometry = new PointGeometry(new double[2] { x, y });
    }
}

public record EquipmentPointResponse
    (Guid Id, FlatEquipmentResponse Equipment) : Response(Id)
{
    public required PointFeature Feature { get; set; }
}

public record EquipmentPointsResponse(IEnumerable<EquipmentPointResponse> Items);