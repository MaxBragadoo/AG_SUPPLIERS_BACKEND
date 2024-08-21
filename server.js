<<<<<<< HEAD:Sistema/server.js
const express = require('express');
const path = require('path');
 
const app = express();
const PORT = process.env.PORT || 10000;
 
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

=======
const express = require('express');
const path = require('path');
 
const app = express();
const PORT = process.env.PORT || 10000;
 
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

>>>>>>> 31b4e46055f13664b630a80d3caa6a89ade84457:server.js
