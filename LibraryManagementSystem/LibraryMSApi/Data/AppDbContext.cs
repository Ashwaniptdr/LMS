using LibraryMSApi.Data.Auth.Entities;
using LibraryMSApi.Data.UserAuth.Entaties;
using Microsoft.EntityFrameworkCore;

namespace LibraryMSApi.Data
{
    public class AppDbContext (DbContextOptions options) : DbContext (options)
    {

        public  DbSet<EmployeeRegister> Employees { get; set; } 

        public DbSet<UserRegister>Users { get; set; }


    }
}
