using Main.Core.Entities;
using Main.Core.Interfaces.Repositories;
using Main.Infrastructure.Context;
using Main.Infrastructure.Repositories.Base;

namespace Main.Infrastructure.Repositories;

public class SpeedRepository : Repository<Speed>, ISpeedRepository
{
    public SpeedRepository(ApplicationContext context) : base(context)
    {
    }
}