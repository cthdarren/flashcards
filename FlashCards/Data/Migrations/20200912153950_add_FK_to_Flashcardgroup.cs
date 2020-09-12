using Microsoft.EntityFrameworkCore.Migrations;

namespace FlashCards.Data.Migrations
{
    public partial class add_FK_to_Flashcardgroup : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ApplicationUserId",
                table: "FlashCardGroups",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UserId",
                table: "FlashCardGroups",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_FlashCardGroups_UserId",
                table: "FlashCardGroups",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_FlashCardGroups_AspNetUsers_UserId",
                table: "FlashCardGroups",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_FlashCardGroups_AspNetUsers_UserId",
                table: "FlashCardGroups");

            migrationBuilder.DropIndex(
                name: "IX_FlashCardGroups_UserId",
                table: "FlashCardGroups");

            migrationBuilder.DropColumn(
                name: "ApplicationUserId",
                table: "FlashCardGroups");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "FlashCardGroups");
        }
    }
}
