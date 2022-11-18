using Main.Core.Entities;
using Main.Core.Interfaces.Repositories;
using Main.Infrastructure.Context;
using Main.Infrastructure.Repositories.Base;

namespace Main.Infrastructure.Repositories;

public class EquipmentRepository : Repository<Equipment>, IEquipmentRepository
{
    public EquipmentRepository(ApplicationContext context) : base(context)
    {
    }
}