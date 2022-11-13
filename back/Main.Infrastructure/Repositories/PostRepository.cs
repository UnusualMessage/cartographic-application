using Main.Core.Entities;
using Main.Core.Interfaces.Repositories;
using Main.Infrastructure.Context;
using Main.Infrastructure.Repositories.Base;

namespace Main.Infrastructure.Repositories;

public class PostRepository : Repository<Post>, IPostRepository
{
    public PostRepository(ApplicationContext context) : base(context)
    {
    }
}