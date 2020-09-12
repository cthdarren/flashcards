using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace FlashCards.Models
{
    public class FlashCardGroup
    {
        [Key]
        public int CardGroupID { get; set; }
        public string Name { get; set; }
        public ICollection<FlashCard> FlashCards { get; set; }
    }
}
