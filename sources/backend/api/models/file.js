const mongoose = require('mongoose')

const fileSchema = mongoose.Schema({
    filename: { type: String, required: true },
    type: { type: String, required: true },
    description: { type: String, required: true },
    createdAt: { type: Date, required: true, default: Date.now() },
    updatedAt: Date
})

module.exports = mongoose.model('File', fileSchema)