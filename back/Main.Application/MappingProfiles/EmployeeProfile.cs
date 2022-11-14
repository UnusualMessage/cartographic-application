using AutoMapper;
using Main.Application.Requests.Commands;
using Main.Application.Responses;
using Main.Core.Entities;

namespace Main.Application.MappingProfiles;

public class EmployeeProfile : Profile
{
    public EmployeeProfile()
    {
        CreateMap<Employee, EmployeeResponse>();
        CreateMap<CreateEmployee, Employee>();
        CreateMap<UpdateEmployee, Employee>();
    }
}