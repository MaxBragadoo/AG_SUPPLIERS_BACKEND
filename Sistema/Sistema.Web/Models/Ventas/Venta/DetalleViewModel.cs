﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Sistema.Web.Models.Ventas.Venta
{
    public class DetalleViewModel
    {
        //[Required]
        public int idventa { get; set; }
        public int iddetalle_venta { get; set; }
        public int idarticulo { get; set; }
        public string codigo { get; set; }

        public string descripcion { get; set; }

        //[Required]
        public int cantidad { get; set; }
        //[Required]
        public decimal precio { get; set; }
        //[Required]
        public decimal descuento { get; set; }
    }
}
