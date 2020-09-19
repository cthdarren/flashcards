using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using FlashCards.Models;
using FlashCards.Data;
using Microsoft.AspNetCore.Identity;

namespace FlashCards.Controllers
{
    public class HomeController : Controller
    {
        private readonly ApplicationDbContext _context;
        public UserManager<IdentityUser> _usermanager;
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger, ApplicationDbContext context, UserManager<IdentityUser> usermanager)
        {
            _logger = logger;
            _context = context;
            _usermanager = usermanager;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        public IActionResult FlashCards()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        //TODO CHANGE THIS TO ADDING A FLASHCARD TAKES IN A LIST AND OTHER PROPERTIES
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> AddFlashCardSet([FromBody] FlashCardPayload payload)
        {
            string userId = _usermanager.GetUserId(User);
            
            FlashCardSet NewFlashCardSet = new FlashCardSet(){
                CardGroupID = new Guid(),
                Name = payload.name,
                FlashCards = payload.flashCards,
                UserId = userId
            };
            _context.Add(NewFlashCardSet);

            try { 
                await _context.SaveChangesAsync();
                return new JsonResult(new { success = true });
            }
            catch
            {
                return new JsonResult(new { success = false });
            }

        }

        public async Task<IActionResult> GetFlashCards()
        {
            string userId = _usermanager.GetUserId(User);

            List<FlashCardSet> cardSetList = _context.FlashCardSets.Where(f => f.UserId == userId).ToList();

            return new JsonResult(new { success = true, payload = cardSetList });
        }


        public class FlashCardPayload{
            public string name;
            public List<FlashCard> flashCards;
        }
    }
}
