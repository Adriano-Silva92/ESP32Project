const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_CONNECT)
    .then(() => console.log("Conectado com sucesso ao MongoDB!"))
    .catch(err => console.error("Erro ao conectar no MongoDB:", err))
