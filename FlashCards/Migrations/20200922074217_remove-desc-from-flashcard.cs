using Microsoft.EntityFrameworkCore.Migrations;

namespace FlashCards.Migrations
{
    public partial class removedescfromflashcard : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Description",
                table: "FlashCards");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "FlashCards",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
