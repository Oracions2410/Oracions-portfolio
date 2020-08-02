const mongoose = require('mongoose')

const techSchema = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    language: { type: mongoose.Schema.Types.ObjectId, ref: 'Language', required: true },
    experience: { type: Number, required: true },
    createdAt: { type: Date, required: true, default: Date.now() },
    updatedAt: Date
})

module.exports = mongoose.model('Tech', techSchema)