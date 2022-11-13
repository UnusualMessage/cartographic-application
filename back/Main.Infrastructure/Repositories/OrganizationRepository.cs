using Main.Core.Entities;
using Main.Core.Interfaces.Repositories;
using Main.Infrastructure.Context;
using Main.Infrastructure.Repositories.Base;

namespace Main.Infrastructure.Repositories;

public class OrganizationRepository : Repository<Organization>, IOrganizationRepository
{
    public OrganizationRepository(ApplicationContext context) : base(context)
    {
    }
}