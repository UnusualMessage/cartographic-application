using Main.Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Main.Infrastructure.Context.Configuration;

public class PostsConfiguration : IEntityTypeConfiguration<Post>
{
    public void Configure(EntityTypeBuilder<Post> builder)
    {
        builder.ToTable("posts");
        
        builder
            .HasMany<Employee>()
            .WithOne(e => e.Post)
            .HasForeignKey(e => e.PostId)
            .OnDelete(DeleteBehavior.Cascade);
    }
}