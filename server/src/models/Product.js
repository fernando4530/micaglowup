const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true, trim: true },
    marca: { type: String, required: true, trim: true },
    descripcion: { type: String, trim: true },
    precio: { type: Number },
    imagen: { type: String },
    stock: { type: Number, default: 0 },
    destacado: { type: Boolean, default: false },
    activo: { type: Boolean, default: true },
    categoria: { type: String, trim: true },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Product', productSchema)
