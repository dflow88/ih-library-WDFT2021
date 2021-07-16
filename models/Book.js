// IMPORTACIONES
const mongoose  = require('mongoose')
const Schema    = mongoose.Schema

// SCHEMA

const bookSchema = new Schema(
    {
        title: String,
        description: String,
        author: String,
        rating: Number
    },
    {
        timestamps: true //Genera el momento en el que se creo el documento
    }
)

// MODELO

const Book = mongoose.model('Book', bookSchema)

// EXPORTACION

module.exports = Book