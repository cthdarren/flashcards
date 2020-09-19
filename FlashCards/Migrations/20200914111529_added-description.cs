using Microsoft.EntityFrameworkCore.Migrations;

namespace FlashCards.Migrations
{
    public partial class addeddescription : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "FlashCardSets",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Description",
                table: "FlashCardSets");
        }
    }
}
