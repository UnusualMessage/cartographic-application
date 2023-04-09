using Main.Core.Entities.Geometry;
using Main.Core.Interfaces.Repositories;
using Main.Infrastructure.Context;
using Main.Infrastructure.Repositories.Base;

namespace Main.Infrastructure.Repositories;

public class EquipmentPointRepository : Repository<EquipmentPoint>, IEquipmentPointRepository
{
    public EquipmentPointRepository(ApplicationContext context) : base(context)
    {
    }
}