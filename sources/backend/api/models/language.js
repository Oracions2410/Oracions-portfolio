const mongoose = require('mongoose')

const langSchema = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    createdAt: { type: Date, required: true, default: Date.now() },
    updatedAt: Date
})

module.exports = mongoose.model('Language', langSchema)