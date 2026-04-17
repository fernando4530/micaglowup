const express = require('express')
const Product = require('../models/Product')
const authMiddleware = require('../middleware/auth')

const router = express.Router()

// GET /api/products — público
router.get('/', async (req, res) => {
  try {
    const filter = { activo: true }
    if (req.query.destacado === 'true') filter.destacado = true

    const products = await Product.find(filter).sort({ createdAt: -1 })
    res.json(products)
  } catch {
    res.status(500).json({ message: 'Error interno' })
  }
})

// GET /api/products/:id — público
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findOne({ _id: req.params.id, activo: true })
    if (!product) return res.status(404).json({ message: 'Producto no encontrado' })
    res.json(product)
  } catch {
    res.status(500).json({ message: 'Error interno' })
  }
})

// POST /api/products — protegido
router.post('/', authMiddleware, async (req, res) => {
  try {
    const product = await Product.create(req.body)
    res.status(201).json(product)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// PUT /api/products/:id — protegido
router.put('/:id', authMiddleware, async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })
    if (!product) return res.status(404).json({ message: 'Producto no encontrado' })
    res.json(product)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// DELETE /api/products/:id — protegido, soft delete
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      { activo: false },
      { new: true }
    )
    if (!product) return res.status(404).json({ message: 'Producto no encontrado' })
    res.json({ message: 'Producto desactivado', product })
  } catch {
    res.status(500).json({ message: 'Error interno' })
  }
})

module.exports = router
