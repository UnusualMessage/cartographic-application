using Main.Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Main.Infrastructure.Context.Configuration;

public class MountedsConfiguration : IEntityTypeConfiguration<Mounted>
{
    public void Configure(EntityTypeBuilder<Mounted> builder)
    {
        builder.ToTable("mounteds");
    }
}