﻿using System.ComponentModel.DataAnnotations;
using Main.Application.Responses;
using MassTransit.Mediator;

namespace Main.Application.Requests.Commands;

public record CreateDepartment([Required] string Title, [Required] Guid OrganizationId) : Request<DepartmentResponse>;

public record UpdateDepartment
    ([Required] Guid Id, [Required] string Title, [Required] Guid OrganizationId) : Request<DepartmentResponse>;

public record DeleteDepartment([Required] Guid Id) : Request<DepartmentResponse>;