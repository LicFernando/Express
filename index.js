const express = require('express');
const app = express();

// Middleware para poder recibir JSON en las peticiones (buena práctica)
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API funcionando');
});

app.get('/usuario', (req, res) => {
  const usuario = {
    id: 1,
    nombre: 'Fernando Ochoa',
    rol: 'Administrador',
    activo: true,
    fechaCreacion: '2025-03-24'
  };

  res.json(usuario);
});

app.listen(3000, () => {
  console.log('🚀 Servidor corriendo en http://localhost:3000');
});