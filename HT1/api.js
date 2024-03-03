const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Implementar CORS
app.use(cors());

//Verificacion de estado
app.get('/check', (req, res) => {
    res.status(200).json({message: 'OK'});
});

//Obtener el json
app.get('/', (req, res) => {
    res.status(200).json({Instancia: 'Instancia #1 - API #1', Curso: "Seminario de Sistemas 1", Estudiante: "Roberto Carlos Gómez Donis - <202000544>"});
});

// escuchar puerto 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000');
  })