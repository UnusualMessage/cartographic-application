using Main.Core.Entities;
using Main.Core.Interfaces.Repositories;
using Main.Infrastructure.Context;
using Main.Infrastructure.Repositories.Base;

namespace Main.Infrastructure.Repositories;

public class EmployeeRepository : Repository<Employee>, IEmployeeRepository
{
    public EmployeeRepository(ApplicationContext context) : base(context)
    {
    }
}