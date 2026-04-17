require('dotenv').config()
const mongoose = require('mongoose')
const User = require('../src/models/User')

async function main() {
  await mongoose.connect(process.env.MONGODB_URI)
  const existing = await User.findOne({ email: 'admin@micaglowup.com' })
  if (existing) {
    console.log('Usuario ya existe')
    process.exit(0)
  }
  await User.create({ email: 'admin@micaglowup.com', password: 'admin123' })
  console.log('Usuario admin creado')
  process.exit(0)
}

main().catch(err => { console.error(err); process.exit(1) })
