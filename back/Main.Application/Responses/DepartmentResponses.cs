﻿using Shared.Core.Responses;

namespace Main.Application.Responses;

public record DepartmentResponse(Guid Id, string Title) : Response(Id);

public record DepartmentsResponse(IEnumerable<DepartmentResponse> Departments);