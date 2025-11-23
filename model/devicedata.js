const mongoose = require('mongoose');
const slugify = require('slug'); // usar slug@6
const { Schema } = mongoose;

const deviceSchema = new Schema({
    nome: {
        type: String,
        required: [true, 'O nome do device é obrigatório'],
        unique: true, // impede duplicados
        trim: true
    },
    slug: { type: String, unique: true }, // será gerado automaticamente
    kwh: {
        type: Number,
        required: [false, 'O consumo em kWh é obrigatório'],
        min: [0, 'O valor de kWh não pode ser negativo']
    },
    corrente: {
        type: Number,
        required: [true, 'A corrente é obrigatória'],
        min: [0, 'A corrente não pode ser negativa']
    },
    voltagem: {
        type: Number,
        required: [true, 'A voltagem é obrigatória'],
        min: [0, 'A voltagem não pode ser negativa']
    }
}, { timestamps: true }); // adiciona createdAt e updatedAt

// Gera slug automaticamente antes de salvar
deviceSchema.pre('save', function() {
    if (this.nome) {
        this.slug = slugify(this.nome, { lower: true });
    }
});

module.exports = mongoose.model('devices', deviceSchema);
