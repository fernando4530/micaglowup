const express = require('express')
const multer = require('multer')
const cloudinary = require('cloudinary').v2
const authMiddleware = require('../middleware/auth')

const router = express.Router()
const upload = multer({ storage: multer.memoryStorage() })

// POST /api/upload — protegido
router.post('/', authMiddleware, upload.single('image'), (req, res) => {
  if (!req.file) return res.status(400).json({ message: 'No se recibió ninguna imagen' })

  const stream = cloudinary.uploader.upload_stream(
    { folder: 'mica-glow-up/products' },
    (error, result) => {
      if (error || !result) return res.status(500).json({ message: 'Error al subir imagen' })
      res.json({ url: result.secure_url })
    }
  )

  stream.end(req.file.buffer)
})

module.exports = router
