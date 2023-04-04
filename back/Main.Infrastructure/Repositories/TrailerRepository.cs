using Main.Core.Entities;
using Main.Core.Interfaces.Repositories;
using Main.Infrastructure.Context;
using Main.Infrastructure.Repositories.Base;

namespace Main.Infrastructure.Repositories;

public class TrailerRepository : Repository<Trailer>, ITrailerRepository
{
    public TrailerRepository(ApplicationContext context) : base(context)
    {
    }
}