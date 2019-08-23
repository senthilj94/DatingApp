using System.ComponentModel.DataAnnotations;

namespace DatingApp.Api.DataTransferObjects
{
    public class UserForRegisterDTO
    {
        [Required]
        public string Username { get; set; }

        [Required]
        [StringLength(8, MinimumLength = 4, ErrorMessage = "You must specify password from 4 to 8 characters")]
        public string Password { get; set; }
    }
}