using AutoMapper;
using Main.Application.Requests.Commands;
using Main.Application.Responses;
using Main.Core.Entities;

namespace Main.Application.MappingProfiles;

public class OrganizationProfile : Profile
{
    public OrganizationProfile()
    {
        CreateMap<Organization, OrganizationResponse>();
        CreateMap<CreateOrganization, Organization>();
        CreateMap<UpdateOrganization, Organization>();
    }
}