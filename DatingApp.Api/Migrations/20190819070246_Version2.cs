using Microsoft.EntityFrameworkCore.Migrations;

namespace DatingApp.Api.Migrations
{
    public partial class Version2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Values",
                table: "Values");

            migrationBuilder.RenameTable(
                name: "Values",
                newName: "DataValues");

            migrationBuilder.AddPrimaryKey(
                name: "PK_DataValues",
                table: "DataValues",
                column: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_DataValues",
                table: "DataValues");

            migrationBuilder.RenameTable(
                name: "DataValues",
                newName: "Values");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Values",
                table: "Values",
                column: "Id");
        }
    }
}
