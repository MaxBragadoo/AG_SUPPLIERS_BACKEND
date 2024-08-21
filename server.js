const express = require('express');
const path = require('path');
 
const app = express();
const PORT = process.env.PORT || 3000;
 
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

