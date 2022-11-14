using Main.Core.Entities;
using Main.Infrastructure.Context.Configuration;
using Microsoft.EntityFrameworkCore;

namespace Main.Infrastructure.Context;

public class ApplicationContext : DbContext
{
    public DbSet<Employee>? Employees { get; set; }
    public DbSet<Post>? Posts { get; set; }
    public DbSet<Organization>? Organizations { get; set; }
    
    public ApplicationContext(DbContextOptions options) : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfiguration(new EmployeesConfiguration());
        modelBuilder.ApplyConfiguration(new PostsConfiguration());
        modelBuilder.ApplyConfiguration(new OrganizationsConfiguration());
    }
}