using AutoMapper;
using Main.Application.Requests.Commands;
using Main.Application.Responses;
using Main.Core.Entities;

namespace Main.Application.MappingProfiles;

public class DepartmentProfile : Profile
{
    public DepartmentProfile()
    {
        CreateMap<Department, DepartmentResponse>();
        CreateMap<CreateDepartment, Department>();
        CreateMap<UpdateDepartment, Department>();
    }
}