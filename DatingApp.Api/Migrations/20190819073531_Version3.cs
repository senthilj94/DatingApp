using Microsoft.EntityFrameworkCore.Migrations;

namespace DatingApp.Api.Migrations
{
    public partial class Version3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "DataValues",
                columns: new[] { "Id", "Name" },
                values: new object[] { 1, "Value1" });

            migrationBuilder.InsertData(
                table: "DataValues",
                columns: new[] { "Id", "Name" },
                values: new object[] { 2, "Value2" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "DataValues",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "DataValues",
                keyColumn: "Id",
                keyValue: 2);
        }
    }
}
