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
    name       : "Crimson Crush Candle",
    category   : "candles",
    description: " A rose sand wax candle. The ultimate centerpiece for an evening of passion.",
    price      : 160,
    size       : "100g",
    scent      : "Rose",
    image      : "IMG-20260314-WA0071.jpg",
    isNew      : true,
    isSpecial  : false,
    specialPrice: null,
    comingSoon : false
  },

  {
    id         : 2,
    name       : "Milkshake Candle",
    category   : "candles",
    description: "A nostalguc comfort parafin wax candle. Designed to turn your space into a decadent sanctuary.",
    price      : 200,
    size       : "100g",
    scent      : "Ylang Ylang & Vanilla",
    image      : "IMG-20260220-WA0019.jpg",
    isNew      : false,
    isSpecial  : true,
    specialPrice: 150,
    comingSoon : false
  },

  {
    id         : 3,
    name       : "Solar Flare Candle",
    category   : "candles",
    description: "Bright and uplifting sand wax candle. Perfect for energising your morning.",
    price      : 160,
    size       : "100g",
    scent      : "Sweet Orange & Lemon",
    image      : "IMG-20260314-WA0123.jpg",
    isNew      : false,
    isSpecial  : false,
    specialPrice: null,
    comingSoon : false
  },

  {
    id         : 4,
    name       : "Midnight Abyss Candle",
    category   : "candles",
    description: "A deep, mysterious blend of sand wax with dark woody and musky notes.",
    price      : 160,
    size       : "100g", 
    scent      : "Cerdarwood",
    image      : "IMG-20260314-WA0077.jpg",
    isNew      : false,
    isSpecial  : false,
    specialPrice: null,
    comingSoon : false
  },

  {
    id         : 5,
    name       : "Arctic Breeze Candle",
    category   : "candles",
    description: "A eucalyptus scented sand wax candle, cool, crisp and refreshing. Brings a sense of airy lightness to any room",
    price      : 160,
    size       : "100g",
    scent      : "eucalyptus",
    image      : "IMG-20260314-WA0143.jpg",
    isNew      : false,
    isSpecial  : false,
    specialPrice: null,
    comingSoon : false
  },

  {
    id         : 6,
    name       : "Pure Pearl Candle",
    category   : "candles",
    description: " A vanilla scented sand wax candle, a minimalist's dream that fits seamlessly into any decor style.",
    price      : 160,
    size       : "100g",
    scent      : "Vanilla",
    image      : "IMG-20260314-WA0111.jpg",
    isNew      : false,
    isSpecial  : false,
    specialPrice: null,
    comingSoon : false
  },

  {
    id         : 7,
    name       : "Botanical Bloom Candle",
    category   : "candles",
    description: "Fresh and grounding sand wax candle inspired by a garden in full bloom.",
    price      : 160,
    size       : "100g",
    scent      : "Tea Tree",
    image      : "IMG-20260314-WA0083.jpg",
    isNew      : false,
    isSpecial  : false,
    specialPrice: null,
    comingSoon : false
  },

  {
    id         : 8,
    name       : "Blush Petal Candle",
    category   : "candles",
    description: "Soft and romantic sand wax candle with a blend of roses. Casts a warm flattering glow for your self-care rights.",
    price      : 160,
    size       : "100g",
    scent      : "Geranium & Rose",
    image      : "IMG-20260314-WA0093.jpg",
    isNew      : false,
    isSpecial  : false,
    specialPrice: null,
    comingSoon : false
  },

  // ── SOAPS (Coming Soon) ──
  {
    id         : 9,
    name       : "Coming Soon",
    category   : "soaps",
    description: "A gentle, nourishing soap made with raw honey and oats. Great for sensitive skin.",
    price      : null,
    size       : "100g",
    scent      : "Honey & Oat",
    image      : "IMG-20260220-WA0019.jpg",
    isNew      : true,
    isSpecial  : false,
    specialPrice: null,
    comingSoon : true
  },

  {
    id         : 10,
    name       : "Coming Soon",
    category   : "soaps",
    description: "Luxurious pink rose clay soap with real rose petals. Cleanses and softens skin beautifully.",
    price      : null,
    size       : "100g",
    scent      : "Rose & Geranium",
    image      : "IMG-20260220-WA0019.jpg",
    isNew      : false,
    isSpecial  : false,
    specialPrice: null,
    comingSoon : true
  },

  {
    id         : 11,
    name       : "Coming Soon",
    category   : "soaps",
    description: "Deep cleansing activated charcoal soap with purifying tea tree oil. Great for oily skin.",
    price      : null,
    size       : "100g",
    scent      : "Tea Tree & Mint",
    image      : "IMG-20260220-WA0019.jpg",
    isNew      : false,
    isSpecial  : false,
    specialPrice: null,
    comingSoon : true
  },

  {
    id         : 12,
    name       : "Coming Soon",
    category   : "soaps",
    description: "Deep cleansing activated charcoal soap with purifying tea tree oil. Great for oily skin.",
    price      : null,
    size       : "100g",
    scent      : "Tea Tree & Mint",
    image      : "IMG-20260220-WA0019.jpg",
    isNew      : false,
    isSpecial  : false,
    specialPrice: null,
    comingSoon : true
  },

  // ── LIP GLOSS (Coming Soon) ──
  {
    id         : 13,
    name       : "Coming Soon",
    category   : "lip-gloss",
    description: "A juicy, non-sticky strawberry lip gloss. Keeps your lips soft, plump and glossy all day.",
    price      : null,
    size       : "10ml",
    shade      : "Strawberry Pink",
    image      : "",
    isNew      : true,
    isSpecial  : false,
    specialPrice: null,
    comingSoon : true
  },

  {
    id         : 14,
    name       : "Coming Soon",
    category   : "lip-gloss",
    description: "A beautiful everyday nude gloss infused with honey. Moisturising and effortlessly pretty.",
    price      : null,
    size       : "10ml",
    shade      : "Nude Honey",
    image      : "",
    isNew      : false,
    isSpecial  : false,
    specialPrice: null,
    comingSoon : true
  },

  {
    id         : 15,
    name       : "Coming Soon",
    category   : "lip-gloss",
    description: "Fun, fresh watermelon gloss with a gorgeous sheer pink finish. Summer in a tube!",
    price      : null,
    size       : "10ml",
    shade      : "Sheer Watermelon",
    image      : "",
    isNew      : false,
    isSpecial  : false,
    specialPrice: null,
    comingSoon : true
  },

  // ── BODY BUTTERS (Coming Soon) ──
  {
    id         : 16,
    name       : "Coming Soon",
    category   : "body-butters",
    description: "A rich, whipped body butter made with shea and mango butter. Coming soon!",
    price      : null,
    size       : "",
    scent      : "Mango & Coconut",
    image      : "",
    isNew      : false,
    isSpecial  : false,
    specialPrice: null,
    comingSoon : true
  },

  {
    id         : 17,
    name       : "Coming Soon",
    category   : "body-butters",
    description: "Deeply nourishing vanilla rose body butter. Your skin will thank you. Coming soon!",
    price      : null,
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
    id         : 18,
    name       : "Coming Soon",
    category   : "oils",
    description: "A lightweight, fast-absorbing body oil that leaves your skin glowing. Coming soon!",
    price      : null,
    size       : "100ml",
    scent      : "Sweet Almond & Jasmine",
    image      : "",
    isNew      : false,
    isSpecial  : false,
    specialPrice: null,
    comingSoon : true
  }

]; 