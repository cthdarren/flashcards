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
            modelBuilder.Entity<FlashCardSet>()
                .HasMany(fcg => fcg.FlashCards)
                .WithOne(fc => fc.FlashCardSet);
        }

        public DbSet<FlashCard> FlashCards { get; set; }
        public DbSet<FlashCardSet> FlashCardSets { get; set; }
    }

}
