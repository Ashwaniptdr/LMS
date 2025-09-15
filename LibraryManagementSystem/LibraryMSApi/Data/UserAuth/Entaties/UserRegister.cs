using System.ComponentModel.DataAnnotations;

namespace LibraryMSApi.Data.UserAuth.Entaties
{
    public class UserRegister
    {
        [Key] public int UserId { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Phone { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
        public string MemberType { get; set; } = string.Empty;
    }
}
