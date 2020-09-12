using Microsoft.EntityFrameworkCore.Migrations;

namespace FlashCards.Data.Migrations
{
    public partial class addflashcards : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "FlashCardGroups",
                columns: table => new
                {
                    CardGroupID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FlashCardGroups", x => x.CardGroupID);
                });

            migrationBuilder.CreateTable(
                name: "FlashCards",
                columns: table => new
                {
                    FlashCardID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CardGroupID = table.Column<int>(nullable: false),
                    Question = table.Column<string>(nullable: true),
                    Answer = table.Column<string>(nullable: true),
                    FlashCardGroupCardGroupID = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FlashCards", x => x.FlashCardID);
                    table.ForeignKey(
                        name: "FK_FlashCards_FlashCardGroups_FlashCardGroupCardGroupID",
                        column: x => x.FlashCardGroupCardGroupID,
                        principalTable: "FlashCardGroups",
                        principalColumn: "CardGroupID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_FlashCards_FlashCardGroupCardGroupID",
                table: "FlashCards",
                column: "FlashCardGroupCardGroupID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "FlashCards");

            migrationBuilder.DropTable(
                name: "FlashCardGroups");
        }
    }
}
