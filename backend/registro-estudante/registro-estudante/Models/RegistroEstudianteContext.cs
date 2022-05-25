using System;
using Microsoft.EntityFrameworkCore;

namespace registro_estudiante.Models
{
    public class RegistroEstudianteContext : DbContext
    {
        public RegistroEstudianteContext(DbContextOptions<RegistroEstudianteContext> options)
            : base(options)
        {
        }

        public DbSet<Estudiante> Estudiantes { get; set; }
    }
}
