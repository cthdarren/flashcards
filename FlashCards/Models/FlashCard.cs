using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace FlashCards.Models
{
    public class FlashCard
    {
        [Key]
        public int FlashCardID { get; set; }
        public int CardGroupID { get; set; }
        public string Question { get; set; }
        public string Answer { get; set; }

        public FlashCardGroup FlashCardGroup { get; set; }
    }
}
