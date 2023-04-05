using Main.Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Main.Infrastructure.Context.Configuration;

public class EquipmentTypesConfiguration : IEntityTypeConfiguration<EquipmentType>
{
    public void Configure(EntityTypeBuilder<EquipmentType> builder)
    {
        builder.ToTable("equipment_types");

        builder
            .HasMany<Equipment>()
            .WithOne(e => e.EquipmentType)
            .HasForeignKey(e => e.EquipmentTypeId)
            .OnDelete(DeleteBehavior.Cascade);
    }
}