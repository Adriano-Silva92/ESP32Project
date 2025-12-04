const express = require('express');
require('dotenv').config();
require('./mongodb/mongocom');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Rotas da API
const api = require('./rotas/');
app.use('/api', api);

// Servir arquivos estáticos do frontend
app.use(express.static(path.join(__dirname, 'frontend', 'dist')));

// Catch-all seguro para Express 5
app.use((req, res, next) => {
  if (req.path.startsWith('/api')) {
    return next(); // não intercepta API
  }
  res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
