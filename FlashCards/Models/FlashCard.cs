using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace FlashCards.Models
{
    public class FlashCard
    {
        [Key]
        public Guid FlashCardID { get; set; }
        public string Description { get; set; }
        public string Question { get; set; }
        public string Answer { get; set; }
        public Guid CardSetID { get; set; }

        [ForeignKey("CardSetID")]
        public FlashCardSet FlashCardSet { get; set; }
    }
}
