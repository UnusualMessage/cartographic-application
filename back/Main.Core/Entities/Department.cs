﻿using Shared.Core.Entities;

namespace Main.Core.Entities;

public class Department : Entity<Department>
{
    public required string Title { get; set; }

    public override void Update(Department entity)
    {
        Title = entity.Title;
    }
}