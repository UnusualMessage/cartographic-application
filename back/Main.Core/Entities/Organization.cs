﻿using Shared.Core.Entities;

namespace Main.Core.Entities;

public class Organization : Entity<Organization>
{
    public required string Title { get; set; }
    
    public override void Update(Organization entity)
    {
        Title = entity.Title;
    }
}