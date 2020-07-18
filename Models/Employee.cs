using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AprioritWebApp.Models
{
    public class Employee
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string FirstName { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string LastName { get; set; }

        [Required]
        public string Position { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(15)")]
        public string Salary { get; set; }

        [Required]
        [Column(TypeName = "Date")]
        public DateTime HiredDate { get; set; }

        [Column(TypeName = "Date")]
        public DateTime? FiredDate { get; set; }
    }
}
