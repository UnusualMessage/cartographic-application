using Shared.Core.Entities;

namespace Main.Core.Entities;

public class Employee : Entity<Employee>
{
    public required string FirstName { get; set; }
    public string? SecondName { get; set; }
    public string? Patronymic { get; set; }
    public string? Phone { get; set; }
    public string? Email { get; set; }
    public DateOnly? BirthDate { get; set; }
    public string? DriverCard { get; set; }

    public Organization? Organization { get; set; }
    public required Guid OrganizationId { get; set; }

    public Post? Post { get; set; }
    public required Guid PostId { get; set; }

    public Department? Department { get; set; }
    public Guid? DepartmentId { get; set; }
    
    public override void Update(Employee entity)
    {
        FirstName = entity.FirstName;
        SecondName = entity.SecondName;
        Patronymic = entity.Patronymic;
        Phone = entity.Phone;
        Email = entity.Email;
        BirthDate = entity.BirthDate;
        DriverCard = entity.DriverCard;

        DepartmentId = entity.DepartmentId;
        OrganizationId = entity.OrganizationId;
        PostId = entity.PostId;
    }
}