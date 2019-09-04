using System.Linq;
using AutoMapper;
using DatingApp.Api.DataTransferObjects;
using DatingApp.Api.Models;

namespace DatingApp.Api.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
          CreateMap<User, UserForDetailedDTO>()
          .ForMember(dest =>
            dest.PhotoUrl, opt => {
              opt.MapFrom(src => src.Photos.FirstOrDefault(p => p.IsMain).Url);
          })
          .ForMember(dest => 
            dest.Age, opt => {
              opt.MapFrom(src => src.DateOfBirth.CalculateAge());
          }); 
          CreateMap<User, UserForListDTO>()
          .ForMember(dest =>
            dest.PhotoUrl, opt => {
              opt.MapFrom(src => src.Photos.FirstOrDefault(p => p.IsMain).Url);
          })
          .ForMember(dest => 
            dest.Age, opt => {
              opt.MapFrom(src => src.DateOfBirth.CalculateAge());
          });
          CreateMap<Photo, PhotoForDetailedDTO>();  
        }
    }
}