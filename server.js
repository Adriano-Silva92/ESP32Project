const express = require('express');
require('dotenv').config();
require('./mongodb/mongocom'); // Conexão com MongoDB

const app = express();
const PORT = process.env.PORT;

// Middleware para JSON
app.use(express.json()); // substitui body-parser

// Rotas
const api = require('./rotas/');
app.use('/api', api);

// Rota raiz
app.get('/', (req, res) => {
    res.json({
        success: true
    });
});

// Inicia o servidor
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
