using Main.Core.Entities;
using Main.Core.Entities.Geometry;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Main.Infrastructure.Context.Configuration;

public class EquipmentPointsConfiguration : IEntityTypeConfiguration<EquipmentPoint>
{
    public void Configure(EntityTypeBuilder<EquipmentPoint> builder)
    {
        builder.ToTable("equipment_points");

        builder
            .HasOne<Equipment>(e => e.Equipment)
            .WithOne(e => e.Feature)
            .HasForeignKey<Equipment>(e => e.FeatureId)
            .IsRequired(false);
    }
}