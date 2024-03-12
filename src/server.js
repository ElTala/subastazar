const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post('/guardarObjeto', (req, res) => {
  try {
    const nuevoObjeto = req.body;

    if (nuevoObjeto.nombre && nuevoObjeto.descripcion && nuevoObjeto.precio && nuevoObjeto.puja) {
      const existingData = JSON.parse(fs.readFileSync('datos.json', 'utf8')) || [];
      existingData.push(nuevoObjeto);

      fs.writeFileSync('datos.json', JSON.stringify(existingData));

      res.status(200).json({ message: 'Objeto guardado correctamente' });
    } else {
      res.status(400).json({ message: 'Completa todos los campos' });
    }
  } catch (error) {
    console.error('Error en el servidor:', error);
    res.status(500).json({ message: 'Error interno en el servidor' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
