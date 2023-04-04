using Main.Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Main.Infrastructure.Context.Configuration;

public class DepartmentsConfiguration : IEntityTypeConfiguration<Department>
{
    public void Configure(EntityTypeBuilder<Department> builder)
    {
        builder.ToTable("departments");

        builder
            .HasMany<Trailer>()
            .WithOne(e => e.Department)
            .HasForeignKey(e => e.DepartmentId)
            .IsRequired(false)
            .OnDelete(DeleteBehavior.SetNull);
        
        builder
            .HasMany<Speed>()
            .WithOne(e => e.Department)
            .HasForeignKey(e => e.DepartmentId)
            .IsRequired(false)
            .OnDelete(DeleteBehavior.SetNull);

        builder
            .HasMany<Post>()
            .WithOne(e => e.Department)
            .HasForeignKey(e => e.DepartmentId)
            .IsRequired(false)
            .OnDelete(DeleteBehavior.SetNull);
    }
}