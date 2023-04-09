using System.Diagnostics.CodeAnalysis;
using Shared.Core.Responses;

namespace Main.Application.Responses;

public class PointGeometry
{
    public string Type { get; set; } = "Point";
    public double[] Coordinates { get; set; }

    public PointGeometry(double[] coordinates)
    {
        Coordinates = coordinates;
    }
}

public class PointProperties
{
    public required Guid Id { get; init; }
    public Guid? EquipmentId { get; init; }

    [SetsRequiredMembers]
    public PointProperties(Guid id, Guid? equipmentId)
    {
        Id = id;
        EquipmentId = equipmentId;
    }
}

public class PointFeature
{
    public string Type { get; set; } = "Feature";
    public PointGeometry Geometry { get; init; }
    public PointProperties Properties { get; init; }

    public PointFeature(double x, double y, Guid id, Guid? geozoneId)
    {
        Geometry = new PointGeometry(new double[2] { x, y });
        Properties = new PointProperties(id, geozoneId);
    }
}

public record EquipmentPointResponse
    (Guid Id) : Response(Id)
{
    public required PointFeature Feature { get; set; }
}

public record EquipmentPointsResponse(IEnumerable<EquipmentPointResponse> Items);