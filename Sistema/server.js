const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 10000;

// Configura CORS para permitir solicitudes desde el frontend en Vercel
app.use(cors({
  origin: 'https://ag-suppliers-frontend.vercel.app', 
  methods: 'GET,POST,PUT,DELETE',
  credentials: true
}));

// Middleware para el cuerpo de las solicitudes (si es necesario)
app.use(express.json()); // Para manejar JSON en el cuerpo de la solicitud
app.use(express.urlencoded({ extended: true })); // Para manejar datos de formularios

// Define tus rutas de API aquí (ejemplo)
app.use('/api', require('./routes/api')); // Asegúrate de tener un archivo 'routes/api.js' que maneje tus rutas API

// Servir archivos estáticos desde la carpeta 'dist'
app.use(express.static(path.join(__dirname, 'dist')));

// Enviar el archivo index.html para cualquier ruta que no coincida
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
