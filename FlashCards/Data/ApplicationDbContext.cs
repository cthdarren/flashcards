using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using FlashCards.Models;

namespace FlashCards.Data
{
    public class ApplicationDbContext : IdentityDbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<FlashCardGroup>()
                .HasMany(fcg => fcg.FlashCards)
                .WithOne(fc => fc.FlashCardGroup);
        }

        public DbSet<FlashCard> FlashCards { get; set; }
        public DbSet<FlashCardGroup> FlashCardGroups { get; set; }
    }

}
