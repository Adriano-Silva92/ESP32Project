const mongoose = require('mongoose');
const slugify = require('slug');
const { Schema } = mongoose;

const MedidaSchema = new Schema({
    corrente: {
        type: Number,
        required: true,
        min: 0
    },
    voltagem: {
        type: Number,
        required: true,
        min: 0
    },
    kwh: {
        type: Number,
        required: true,
        min: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const deviceSchema = new Schema({
    nome: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },

    slug: {
        type: String,
        unique: true
    },

    // 👉 valores atuais (para cards)
    corrente: Number,
    voltagem: Number,
    kwh: Number,

    // 👉 histórico
    medidas: [MedidaSchema],

    imagem: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    }

}, { timestamps: true });

// slug automático
deviceSchema.pre('save', function () {
    if (this.nome) {
        this.slug = slugify(this.nome, { lower: true });
    }
});

module.exports = mongoose.model('devices', deviceSchema);
