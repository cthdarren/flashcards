using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace FlashCards.Models
{
    public class FlashCard
    {
        [Key]
        public Guid FlashCardID { get; set; }
        public string Question { get; set; }
        public string Answer { get; set; }
        public Guid CardSetID { get; set; }

        [JsonIgnore]
        [ForeignKey("CardSetID")]
        public FlashCardSet FlashCardSet { get; set; }
    }
}
