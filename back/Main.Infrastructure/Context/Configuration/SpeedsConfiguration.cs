using Main.Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Main.Infrastructure.Context.Configuration;

public class SpeedsConfiguration : IEntityTypeConfiguration<Speed>
{
    public void Configure(EntityTypeBuilder<Speed> builder)
    {
        builder.ToTable("speeds");
    }
}