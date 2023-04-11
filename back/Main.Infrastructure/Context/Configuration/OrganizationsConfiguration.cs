using Main.Core.Entities;
using Main.Core.Entities.Geometry;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Main.Infrastructure.Context.Configuration;

public class OrganizationsConfiguration : IEntityTypeConfiguration<Organization>
{
    public void Configure(EntityTypeBuilder<Organization> builder)
    {
        builder.ToTable("organizations");
        
        builder
            .HasMany<Employee>()
            .WithOne(e => e.Organization)
            .HasForeignKey(e => e.OrganizationId)
            .OnDelete(DeleteBehavior.Cascade);

        builder
            .HasMany<Department>()
            .WithOne(e => e.Organization)
            .HasForeignKey(e => e.OrganizationId)
            .OnDelete(DeleteBehavior.Cascade);

        builder
            .HasMany<Trailer>()
            .WithOne(e => e.Organization)
            .HasForeignKey(e => e.OrganizationId)
            .OnDelete(DeleteBehavior.Cascade);

        builder
            .HasMany<Speed>()
            .WithOne(e => e.Organization)
            .HasForeignKey(e => e.OrganizationId)
            .OnDelete(DeleteBehavior.Cascade);

        builder
            .HasMany<Post>()
            .WithOne(e => e.Organization)
            .HasForeignKey(e => e.OrganizationId)
            .OnDelete(DeleteBehavior.Cascade);

        builder
            .HasMany<EquipmentType>()
            .WithOne(e => e.Organization)
            .HasForeignKey(e => e.OrganizationId)
            .OnDelete(DeleteBehavior.Cascade);

        builder
            .HasMany<Equipment>()
            .WithOne(e => e.Organization)
            .HasForeignKey(e => e.OrganizationId)
            .OnDelete(DeleteBehavior.Cascade);

        builder
            .HasMany<Mounted>()
            .WithOne(e => e.Organization)
            .HasForeignKey(e => e.OrganizationId)
            .OnDelete(DeleteBehavior.Cascade);

        builder
            .HasMany<EquipmentPoint>()
            .WithOne(e => e.Organization)
            .HasForeignKey(e => e.OrganizationId)
            .OnDelete(DeleteBehavior.Cascade);

        builder
            .HasMany<GeozonePolygon>()
            .WithOne(e => e.Organization)
            .HasForeignKey(e => e.OrganizationId)
            .OnDelete(DeleteBehavior.Cascade);
    }
}