using Main.Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Main.Infrastructure.Context.Configuration;

public class GeozonesConfiguration : IEntityTypeConfiguration<Geozone>
{
    public void Configure(EntityTypeBuilder<Geozone> builder)
    {
        builder.ToTable("geozones");
    }
}