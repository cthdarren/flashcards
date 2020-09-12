using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
namespace FlashCards.Models
{
    public class FlashCardGroup
    {
        [Key]
        public int CardGroupID { get; set; }
        public string Name { get; set; }
        public ICollection<FlashCard> FlashCards { get; set; }
        public string UserId {get;set;}
        

        public string ApplicationUserId {get;set;}
        [ForeignKey("UserId")]
        public IdentityUser User {get;set;}
    }
}
