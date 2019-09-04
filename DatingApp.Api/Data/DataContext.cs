using DatingApp.Api.Models;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.Api.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base (options) {}

        public DbSet<Value> DataValues {get; set;}

        public DbSet<User> Users {get; set;}

        public DbSet<Photo> Photos {get; set;}

        // protected override void OnModelCreating(ModelBuilder modelBuilder)
        // {
        //     modelBuilder.Entity<Value>().HasData(
        //         new
        //         {
        //             Id = 1,
        //             Name = "Value1"
        //         },
        //         new
        //         {
        //             Id = 2,
        //             Name = "Value2"
        //         }
        //     );
        // }
    }
}