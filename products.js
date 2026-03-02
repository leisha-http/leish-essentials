// ══════════════════════════════════════════════
//   LEISH ESSENTIALS — PRODUCTS & SHIPPING DATA
// ══════════════════════════════════════════════

// ── Shipping Rates (in Rands) ──
const shippingRates = {
  gauteng_standard : 100,
  gauteng_premium  : 150,
  national_standard: 200,
  national_premium : 250
};

// ══════════════════════════════════════════════
//   PRODUCTS ARRAY
// ══════════════════════════════════════════════

const products = [

  // ── CANDLES ──
  {
    id         : 1,
    name       : "Warm Vanilla Candle",
    category   : "candles",
    description: "A warm, cosy vanilla scented soy candle. Perfect for winding down after a long day.",
    price      : 120,
    size       : "200ml",
    scent      : "Warm Vanilla",
    image      : "IMG-20260219-WA0039.jpg",
    isNew      : true,
    isSpecial  : false,
    specialPrice: null,
    comingSoon : false
  },

  {
    id         : 2,
    name       : "Lavender Dreams Candle",
    category   : "candles",
    description: "Calming lavender and chamomile blend. Light this and let your stress melt away.",
    price      : 120,
    size       : "200ml",
    scent      : "Lavender & Chamomile",
    image      : "IMG-20260220-WA0019.jpg",
    isNew      : false,
    isSpecial  : true,
    specialPrice: 95,
    comingSoon : false
  },

  {
    id         : 3,
    name       : "Citrus Burst Candle",
    category   : "candles",
    description: "Bright, uplifting citrus and lemongrass. Perfect for energising your morning.",
    price      : 120,
    size       : "200ml",
    scent      : "Citrus & Lemongrass",
    image      : "IMG-20260220-WA0019.jpg",
    isNew      : false,
    isSpecial  : false,
    specialPrice: null,
    comingSoon : false
  },

  // ── SOAPS ──
  {
    id         : 4,
    name       : "Honey & Oat Soap",
    category   : "soaps",
    description: "A gentle, nourishing soap made with raw honey and oats. Great for sensitive skin.",
    price      : 65,
    size       : "100g",
    scent      : "Honey & Oat",
    image      : "IMG-20260220-WA0019.jpg",
    isNew      : true,
    isSpecial  : false,
    specialPrice: null,
    comingSoon : false
  },

  {
    id         : 5,
    name       : "Rose Clay Soap",
    category   : "soaps",
    description: "Luxurious pink rose clay soap with real rose petals. Cleanses and softens skin beautifully.",
    price      : 70,
    size       : "100g",
    scent      : "Rose & Geranium",
    image      : "IMG-20260220-WA0019.jpg",
    isNew      : false,
    isSpecial  : true,
    specialPrice: 55,
    comingSoon : false
  },

  {
    id         : 6,
    name       : "Charcoal & Tea Tree Soap",
    category   : "soaps",
    description: "Deep cleansing activated charcoal soap with purifying tea tree oil. Great for oily skin.",
    price      : 70,
    size       : "100g",
    scent      : "Tea Tree & Mint",
    image      : "IMG-20260220-WA0019.jpg",
    isNew      : false,
    isSpecial  : false,
    specialPrice: null,
    comingSoon : false
  },

  // ── LIP GLOSS ──
  {
    id         : 7,
    name       : "Strawberry Kiss Lip Gloss",
    category   : "lip-gloss",
    description: "A juicy, non-sticky strawberry lip gloss. Keeps your lips soft, plump and glossy all day.",
    price      : 55,
    size       : "10ml",
    shade      : "Strawberry Pink",
    image      : "",
    isNew      : true,
    isSpecial  : false,
    specialPrice: null,
    comingSoon : false
  },

  {
    id         : 8,
    name       : "Nude Honey Lip Gloss",
    category   : "lip-gloss",
    description: "A beautiful everyday nude gloss infused with honey. Moisturising and effortlessly pretty.",
    price      : 55,
    size       : "10ml",
    shade      : "Nude Honey",
    image      : "",
    isNew      : false,
    isSpecial  : false,
    specialPrice: null,
    comingSoon : false
  },

  {
    id         : 9,
    name       : "Watermelon Shine Lip Gloss",
    category   : "lip-gloss",
    description: "Fun, fresh watermelon gloss with a gorgeous sheer pink finish. Summer in a tube!",
    price      : 55,
    size       : "10ml",
    shade      : "Sheer Watermelon",
    image      : "",
    isNew      : false,
    isSpecial  : true,
    specialPrice: 40,
    comingSoon : false
  },

  // ── BODY BUTTERS (Coming Soon) ──
  {
    id         : 10,
    name       : "Shea & Mango Body Butter",
    category   : "body-butters",
    description: "A rich, whipped body butter made with shea and mango butter. Coming soon!",
    price      : 130,
    size       : "150ml",
    scent      : "Mango & Coconut",
    image      : "",
    isNew      : false,
    isSpecial  : false,
    specialPrice: null,
    comingSoon : true
  },

  {
    id         : 11,
    name       : "Vanilla Rose Body Butter",
    category   : "body-butters",
    description: "Deeply nourishing vanilla rose body butter. Your skin will thank you. Coming soon!",
    price      : 130,
    size       : "150ml",
    scent      : "Vanilla & Rose",
    image      : "",
    isNew      : false,
    isSpecial  : false,
    specialPrice: null,
    comingSoon : true
  },

  // ── OILS (Coming Soon) ──
  {
    id         : 12,
    name       : "Glow Body Oil",
    category   : "oils",
    description: "A lightweight, fast-absorbing body oil that leaves your skin glowing. Coming soon!",
    price      : 110,
    size       : "100ml",
    scent      : "Sweet Almond & Jasmine",
    image      : "",
    isNew      : false,
    isSpecial  : false,
    specialPrice: null,
    comingSoon : true
  }

];