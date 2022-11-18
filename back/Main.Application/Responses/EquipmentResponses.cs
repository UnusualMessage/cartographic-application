namespace Main.Application.Responses;

public record EquipmentResponse(Guid Id, string Name)
{
    public double X { get; set; }
    public double Y { get; set; }
}

public record EquipmentsResponse(IEnumerable<EquipmentResponse> Equipments);