﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Sistema.Entidades.OrdenTrabajo
{
    public class Actualizar_Aeronave_VM
    {
        public int id_modelo { get; set; }
        public int id_aeronave { get; set; }
        public string matricula { get; set; }       
       public string ns_planeador { get; set; }
       public string unidad { get; set; }
       public string capitan { get; set;  }
       public string tel_capitan { get; set; }
       public int cliente { get; set; } 
    }
}
