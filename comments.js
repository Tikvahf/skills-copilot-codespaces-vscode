// Create web server...

// Importa el módulo http de Node.js
const http = require('http');

// Define la función de manejo de solicitudes (request) y respuestas (response)
const server = http.createServer((req, res) => {
  // Configura el encabezado de respuesta con el tipo de contenido
  res.setHeader('Content-Type', 'text/plain');

  // Envia una respuesta al cliente
  res.end('¡Hola, mundo!\n');
});

// Escucha en el puerto 3000 y la dirección localhost (127.0.0.1)
const PORT = 3000;
const HOST = '127.0.0.1';

server.listen(PORT, HOST, () => {
  console.log(`Servidor web escuchando en http://${HOST}:${PORT}/`);
});