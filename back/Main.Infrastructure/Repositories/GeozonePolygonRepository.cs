using Main.Core.Entities.Geometry;
using Main.Core.Interfaces.Repositories;
using Main.Infrastructure.Context;
using Main.Infrastructure.Repositories.Base;

namespace Main.Infrastructure.Repositories;

public class GeozonePolygonRepository : Repository<GeozonePolygon>, IGeozonePolygonRepository
{
    public GeozonePolygonRepository(ApplicationContext context) : base(context)
    {
    }
}