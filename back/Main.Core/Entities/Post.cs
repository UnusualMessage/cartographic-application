using Shared.Core.Entities;

namespace Main.Core.Entities;

public class Post : Entity<Post>
{
    public required string Title { get; set; }
    
    public override void Update(Post entity)
    {
        Title = entity.Title;
    }
}