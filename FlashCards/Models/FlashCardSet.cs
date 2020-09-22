using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Newtonsoft.Json;

namespace FlashCards.Models
{
    public class FlashCardSet
    {
        [Key]
        public Guid CardGroupID { get; set; }
        public string Name { get; set; }
        public string Description {get;set;}
        public ICollection<FlashCard> FlashCards { get; set; }
        [JsonIgnore]
        public string UserId {get;set;}
        

        [ForeignKey("UserId")]
        [JsonIgnore]
        public IdentityUser User {get;set;}
    }
}
