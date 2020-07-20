using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AprioritWebApp.Data;
using AprioritWebApp.Models;

namespace AprioritWebApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PositionController : ControllerBase
    {
        private readonly MainContext _context;

        public PositionController(MainContext context)
        {
            _context = context;
        }

        // GET: api/Position
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Position>>> GetPositions()
        {
            return await _context.Positions.ToListAsync();
        }

        // GET: api/Position/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Position>> GetPosition(int id)
        {
            var position = await _context.Positions.FindAsync(id);

            if (position == null)
            {
                return NotFound();
            }

            return position;
        }      

        // POST: api/Position
        [HttpPost]
        public async Task<ActionResult<Position>> PostPosition(Position position)
        {
            if (ModelState.IsValid)
            {
                Position existPosition = _context.Positions.Where(p => p.Name == position.Name).FirstOrDefault();
                if (existPosition != null)
                {
                    ModelState.AddModelError("positionName", "Должность уже существует!");
                    return BadRequest(ModelState);
                }
                _context.Positions.Add(position);
                await _context.SaveChangesAsync();
                return CreatedAtAction("GetPosition", new { id = position.Id }, position);
            }
            return BadRequest(ModelState);
        }
    }
}
