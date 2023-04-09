using Main.Core.Entities;
using Main.Core.Entities.Geometry;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Main.Infrastructure.Context.Configuration;

public class GeozonePolygonsConfiguration : IEntityTypeConfiguration<GeozonePolygon>
{
    public void Configure(EntityTypeBuilder<GeozonePolygon> builder)
    {
        builder.ToTable("geozone_polygons");

        builder
            .HasOne<Geozone>(e => e.Geozone)
            .WithOne(e => e.Feature)
            .HasForeignKey<GeozonePolygon>(e => e.GeozoneId)
            .IsRequired(false);
    }
}