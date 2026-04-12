import type { ContactInfo } from '../types'

export const CONTACT: ContactInfo = {
  whatsapp: {
    number: '+5492617060496',
    url: 'https://wa.me/5492617060496',
    defaultMessage: 'Hola!%20Vi%20sus%20productos%20en%20Mica%20Glow%20Up%20y%20quiero%20consultar%20%F0%9F%92%84',
  },
  instagram: {
    handle: '@mica.glowup',
    url: 'https://instagram.com/mica.glowup',
  },
} as const
