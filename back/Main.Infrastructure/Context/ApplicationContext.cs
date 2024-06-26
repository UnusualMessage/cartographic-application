﻿using Main.Core.Entities;
using Main.Core.Entities.Geometry;
using Main.Infrastructure.Context.Configuration;
using Microsoft.EntityFrameworkCore;

namespace Main.Infrastructure.Context;

public class ApplicationContext : DbContext
{
    public DbSet<Employee>? Employees { get; set; }
    public DbSet<Post>? Posts { get; set; }
    public DbSet<Speed>? Speeds { get; set; }
    public DbSet<Trailer>? Trailers { get; set; }
    public DbSet<Geozone>? Geozones { get; set; }
    public DbSet<Mounted>? Mounteds { get; set; }

    public DbSet<Equipment>? Equipments { get; set; }
    public DbSet<EquipmentType>? EquipmentTypes { get; set; } 

    public DbSet<Department>? Departments { get; set; }
    public DbSet<Organization>? Organizations { get; set; }

    public DbSet<EquipmentPoint>? Points { get; set; }
    public DbSet<GeozonePolygon>? Polygons { get; set; }
    
    public ApplicationContext(DbContextOptions options) : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.HasPostgresExtension("postgis");
        
        modelBuilder.ApplyConfiguration(new EquipmentsConfiguration());
        modelBuilder.ApplyConfiguration(new EquipmentTypesConfiguration());
        modelBuilder.ApplyConfiguration(new EmployeesConfiguration());
        modelBuilder.ApplyConfiguration(new PostsConfiguration());
        modelBuilder.ApplyConfiguration(new SpeedsConfiguration());
        modelBuilder.ApplyConfiguration(new TrailersConfiguration());
        modelBuilder.ApplyConfiguration(new OrganizationsConfiguration());
        modelBuilder.ApplyConfiguration(new DepartmentsConfiguration());
        modelBuilder.ApplyConfiguration(new GeozonesConfiguration());
        modelBuilder.ApplyConfiguration(new MountedsConfiguration());
        modelBuilder.ApplyConfiguration(new GeozonePolygonsConfiguration());
        modelBuilder.ApplyConfiguration(new EquipmentPointsConfiguration());
    }
}