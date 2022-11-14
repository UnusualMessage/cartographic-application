using Shared.Core.Entities;

namespace Main.Core.Entities;

public class Employee : Entity<Employee>
{
    public string FirstName { get; set; } = "";
    public string? SecondName { get; set; }
    public string? Patronymic { get; set; }
    
    public Guid OrganizationId { get; set; }
    public Organization? Organization { get; set; }
    
    public Guid PostId { get; set; }
    public Post? Post { get; set; }
    
    public override void Update(Employee entity)
    {
        FirstName = entity.FirstName;
        SecondName = entity.SecondName;
        Patronymic = entity.Patronymic;
        OrganizationId = entity.OrganizationId;
        PostId = entity.PostId;
    }
}