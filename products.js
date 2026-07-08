// ══════════════════════════════════════════════
//   LEISH ESSENTIALS — PRODUCTS & SHIPPING DATA
// ══════════════════════════════════════════════

// ── Shipping Rates (in Rands) ──
const shippingRates = {
  gauteng_standard     : 100,
  gauteng_premium      : 150,
  national_standard    : 145,
  national_premium     : 185,
  freeShippingThreshold: 1000
};

// ══════════════════════════════════════════════
//   PRODUCTS ARRAY
// ══════════════════════════════════════════════

const products = [

  // ── GIFT SETS ──
  {
    id          : 1,
    name        : "Happy Mothers Day Gift Set",
    category    : "gift-sets",
    description : "A beautifully curated Mother's Day gift set featuring our limited edition candle, perfectly gift wrapped with a personalised message card. The perfect way to spoil mum.",
    price       : 380,
    size        : "400g",
    scent       : "Vanilla & Rose",
    image       : "InShot_20260502_175457791.jpg",
    isNew       : false,
    isSpecial   : false,
    specialPrice: null,
    comingSoon  : false,
    inStock     : true,
    stock       : 10,
    sizes       : []
  },
  {
  id          : 2,
  name        : " Gift Set",
  category    : "gift-sets",
  description : "A beautifully curated gift set, crafted with love at LeishEssentials.",
  price       : 300,
  size        : "",
  image       : "InShot_20260707_154609418.jpg",
  images      : [
    "InShot_20260707_154502418.jpg",
    "InShot_20260707_154746044.jpg",
    "InShot_20260707_153909192.jpg"
  ],
  isNew       : true,
  isSpecial   : false,
  specialPrice: null,
  comingSoon  : false,
  inStock     : true,
  stock       : 8,
  consultCustom: true,
  sizes       : [],
  
},
  {
    id          : 3,
    name        : "Milkshake Candle",
    category    : "candles",
    description : "A nostalgic comfort paraffin wax candle. Designed to turn your space into a decadent sanctuary.",
    price       : 200,
    size        : "100g",
    scent       : "Ylang Ylang & Vanilla",
    image       : "IMG-20260220-WA0019.jpg",
    isNew       : false,
    isSpecial   : true,
    specialPrice: 150,
    comingSoon  : false,
    inStock     : true,
    stock       : 8,
    sizes       : [
      { label: "Small  — 100g", price: 150 },
      { label: "Medium — 200g", price: 280 },
      { label: "Large  — 300g", price: 340 }
    ]
  },

  {
    id          : 4,
    name        : "Solar Flare Candle",
    category    : "candles",
    description : "Bright and uplifting sand wax candle. Perfect for energising your morning.",
    price       : 160,
    size        : "100g",
    scent       : "Sweet Orange & Lemon",
    image       : "IMG-20260314-WA0123.jpg",
    isNew       : false,
    isSpecial   : false,
    specialPrice: null,
    comingSoon  : false,
    inStock     : true,
    stock       : 8,
    sizes       : [
      { label: "Small  — 100g", price: 160 },
      { label: "Medium — 200g", price: 250 },
      { label: "Large  — 300g", price: 320 }
    ]
  },

  {
    id          : 5,
    name        : "Midnight Abyss Candle",
    category    : "candles",
    description : "A deep, mysterious blend of sand wax with dark woody and musky notes.",
    price       : 160,
    size        : "100g",
    scent       : "Cedarwood",
    image       : "IMG-20260314-WA0077.jpg",
    isNew       : false,
    isSpecial   : false,
    specialPrice: null,
    comingSoon  : false,
    inStock     : true,
    stock       : 10,
    sizes       : [
      { label: "Small  — 100g", price: 160 },
      { label: "Medium — 200g", price: 250 },
      { label: "Large  — 300g", price: 320 }
    ]
  },

  {
    id          : 6,
    name        : "Arctic Breeze Candle",
    category    : "candles",
    description : "A eucalyptus scented sand wax candle, cool, crisp and refreshing. Brings a sense of airy lightness to any room.",
    price       : 160,
    size        : "100g",
    scent       : "Eucalyptus",
    image       : "IMG-20260314-WA0143.jpg",
    isNew       : false,
    isSpecial   : false,
    specialPrice: null,
    comingSoon  : false,
    inStock     : true,
    stock       : 10,
    sizes       : [
      { label: "Small  — 100g", price: 160 },
      { label: "Medium — 200g", price: 250 },
      { label: "Large  — 300g", price: 320 }
    ]
  },

  {
    id          : 7,
    name        : "Pure Pearl Candle",
    category    : "candles",
    description : "A vanilla scented sand wax candle, a minimalist's dream that fits seamlessly into any decor style.",
    price       : 160,
    size        : "100g",
    scent       : "Vanilla",
    image       : "IMG-20260314-WA0111.jpg",
    isNew       : false,
    isSpecial   : false,
    specialPrice: null,
    comingSoon  : false,
    inStock     : true,
    stock       : 6,
    sizes       : [
      { label: "Small  — 100g", price: 160 },
      { label: "Medium — 200g", price: 250 },
      { label: "Large  — 300g", price: 320 }
    ]
  },

  {
    id          : 8,
    name        : "Botanical Bloom Candle",
    category    : "candles",
    description : "Fresh and grounding sand wax candle inspired by a garden in full bloom.",
    price       : 160,
    size        : "100g",
    scent       : "Tea Tree",
    image       : "IMG-20260314-WA0083.jpg",
    isNew       : false,
    isSpecial   : false,
    specialPrice: null,
    comingSoon  : false,
    inStock     : true,
    stock       : 8,
    sizes       : [
      { label: "Small  — 100g", price: 160 },
      { label: "Medium — 200g", price: 250 },
      { label: "Large  — 300g", price: 320 }
    ]
  },

  {
    id          : 9,
    name        : "Blush Petal Candle",
    category    : "candles",
    description : "Soft and romantic sand wax candle with a blend of roses. Casts a warm flattering glow for your self-care nights.",
    price       : 160,
    size        : "100g",
    scent       : "Geranium & Rose",
    image       : "IMG-20260314-WA0093.jpg",
    isNew       : false,
    isSpecial   : false,
    specialPrice: null,
    comingSoon  : false,
    inStock     : true,
    stock       : 7,
    sizes       : [
      { label: "Small  — 100g", price: 160 },
      { label: "Medium — 200g", price: 250 },
      { label: "Large  — 300g", price: 320 }
    ]
  },

  {
    id          : 10,
    name        : "Petal Play Candle",
    category    : "candles",
    description : "A soft floral candle crafted to lift your mood and fill your space with a gentle, blooming aroma. Hand-poured in small batches with care, it's the perfect fresh flowers without the mess vibe for calm mornings, cosy evenings, and everything in between.",
    price       : 145,
    size        : "100g",
    scent       : "Rose & Vanilla",
    image       : "IMG-20260411-WA0149.jpg",
    isNew       : false,
    isSpecial   : false,
    specialPrice: null,
    comingSoon  : false,
    inStock     : true,
    stock       : 7,
    sizes       : [
      { label: "Small  — 100g", price: 145 }
    ]
  },

  // ── RESIN STUDIO ──
  {
    id          : 11,
    name        : "Resin Bookmark",
    category    : "resin",
    description : "A handmade resin bookmark, crafted with love at LeishEssentials.",
    price       : 55,
    size        : "9.7cm",
    scent       : "",
    image       : "InShot_20260629_160137007.jpg",
    isNew       : false,
    isSpecial   : false,
    specialPrice: null,
    comingSoon  : false,
    inStock     : true,
    stock       : 8,
    consultCustom: true,  // ← triggers consultation notice
    sizes       : [
      { label: "Small  — 9.7cm",  price: 55  },
      { label: "Medium — 14.5cm", price: 65  },
      { label: "Large  — 19.5cm", price: 75  }
    ]
  },
  
  {
    id: 12,
    name: "Resin Alphabet Keychain",
    category: "resin",
    description: "A handmade resin keychain, crafted with love at LeishEssentials.",
    price: 55,
    size: "Alphabet",
    image: "InShot_20260629_165132528.jpg",
    images: [
      "IMG_20260629_151301.jpg",
      "InShot_20260629_165132528.jpg",
      "IMG_20260629_151311.jpg"
    ],
    isNew: false,
    isSpecial: false,
    specialPrice: null,
    comingSoon: false,
    inStock: true,
    stock: 8,
    consultCustom: true,
  
      price: 55
    
  },
  {
    id: 13,
    name: "Resin Cresent Keychain",
    category: "resin",
    description: "A handmade resin keychain, crafted with love at LeishEssentials.",
    price: 45,
    size: "",
    image: "IMG_20260629_150747.jpg",
    images: [
      "IMG_20260629_150839.jpg",
      "IMG_20260629_150829.jpg",
      "IMG_20260629_150724.jpg"
    ],
    isNew: false,
    isSpecial: false,
    specialPrice: null,
    comingSoon: false,
    inStock: true,
    stock: 8,
    consultCustom: true,
  
      price: 45
    
  },
  {id: 14,
    name: "Eco-Resin Oval Tray",
    category: "resin",
    description: "A handmade eco-resin tray, crafted with love at LeishEssentials.",
    price: 100,
    size: "",
    image: "InShot_20260707_154343613.jpg",
    images: [
      "InShot_20260707_153909192.jpg",
      "InShot_20260707_154402740.jpg",
    ],
    isNew: false,
    isSpecial: false,
    specialPrice: null,
    comingSoon: false,
    inStock: true,
    stock: 8,
    consultCustom: true,
    
  },
  // ── SOAPS (Coming Soon) ──
  {
    id          : 15,
    name        : "Coming Soon",
    category    : "soaps",
    description : "Coming soon",
    price       : null,
    size        : "100g",
    scent       : "Honey & Oat",
    image       : "",
    isNew       : true,
    isSpecial   : false,
    specialPrice: null,
    comingSoon  : true,
    inStock     : false,
    stock       : 0,
    sizes       : []
  },

  // ── LIP GLOSS (Coming Soon) ──
  {
    id          : 16,
    name        : "Coming Soon",
    category    : "lip-gloss",
    description : "Coming soon",
    price       : null,
    size        : "10ml",
    shade       : "Strawberry Pink",
    image       : "",
    isNew       : true,
    isSpecial   : false,
    specialPrice: null,
    comingSoon  : true,
    inStock     : false,
    stock       : 0,
    sizes       : []
  },

  // ── BODY BUTTERS (Coming Soon) ──
  {
    id          : 17,
    name        : "Coming Soon",
    category    : "body-butters",
    description : "Coming soon",
    price       : null,
    size        : "",
    scent       : "Mango & Coconut",
    image       : "",
    isNew       : false,
    isSpecial   : false,
    specialPrice: null,
    comingSoon  : true,
    inStock     : false,
    stock       : 0,
    sizes       : []
  },

  // ── OILS (Coming Soon) ──
  {
    id          : 18,
    name        : "Coming Soon",
    category    : "oils",
    description : "Coming soon",
    price       : null,
    size        : "100ml",
    scent       : "Sweet Almond & Jasmine",
    image       : "",
    isNew       : false,
    isSpecial   : false,
    specialPrice: null,
    comingSoon  : true,
    inStock     : false,
    stock       : 0,
    sizes       : []
  },
];

// ══════════════════════════════════════════════
//   STOCK & SIZE DISPLAY FUNCTIONS
// ══════════════════════════════════════════════

// ── Get stock badge HTML ──
function getStockBadge(product) {
  if (product.comingSoon) return '';
  if (!product.inStock || product.stock === 0) {
    return `<span class="stock-badge out-of-stock">✕ Out of Stock</span>`;
  }
  if (product.stock <= 5) {
    return `<span class="stock-badge low-stock">⚡ Only ${product.stock} left!</span>`;
  }
  return `<span class="stock-badge in-stock">✓ In Stock</span>`;
}

// ── Get size selector HTML ──
function getSizeSelector(product) {
  if (product.comingSoon) return '';
  if (!product.sizes || product.sizes.length === 0) return '';

  const options = product.sizes.map((size, index) =>
    `<option value="${index}" data-price="${size.price}">
       ${size.label} — R${size.price}
     </option>`
  ).join('');

  return `
    <div class="size-selector-wrap">
      <label class="size-label">Select Size</label>
      <select class="size-selector"
              onchange="updatePrice(this, ${product.id})">
        ${options}
      </select>
    </div>
  `;
}

// ── Get consultation notice HTML ──
function getConsultNotice(product) {
  if (!product.consultCustom) return '';
  if (product.comingSoon)     return '';

  return `
    <div class="consultation-notice">
      <p class="consult-title">🎨 Custom Options Available</p>
      <p class="consult-text">
        Want a specific colour, design, or personalisation?
        We'd love to create something just for you!
      </p>
      <a href="contact.html" class="consult-btn">
        💬 Consult Us
      </a>
    </div>
  `;
}

// ── Update price when size changes ──
function updatePrice(selectEl, productId) {
  const selectedOption = selectEl.options[selectEl.selectedIndex];
  const newPrice       = selectedOption.getAttribute('data-price');
  const card           = selectEl.closest('.product-card');
  const priceEl        = card.querySelector('.product-price');

  if (priceEl) {
    priceEl.textContent = `R${newPrice}`;
  }

  const cartBtn = card.querySelector('.add-to-cart-btn');
  if (cartBtn) {
    cartBtn.setAttribute ('data-price', newPrice);
    cartBtn.setAttribute('data-size',
      selectedOption.textContent.split('—')[0].trim()
    );
  }
}

// ── Get quantity selector HTML ──
function getQuantitySelector(product) {
  if (product.comingSoon || !product.inStock || product.stock === 0) return '';

  return `
    <div class="quantity-wrap">
      <label class="size-label">Quantity</label>
      <div class="quantity-controls">
        <button class="qty-btn"
                onclick="changeQty(this, -1, ${product.stock})">−</button>
        <span class="qty-value">1</span>
        <button class="qty-btn"
                onclick="changeQty(this, 1, ${product.stock})">+</button>
      </div>
    </div>
  `;
}

// ── Change quantity ──
function changeQty(btn, direction, maxStock) {
  const wrap   = btn.closest('.quantity-controls');
  const qtyEl  = wrap.querySelector('.qty-value');
  let current  = parseInt(qtyEl.textContent);
  let newQty   = current + direction;

  if (newQty < 1)        newQty = 1;
  if (newQty > maxStock) newQty = maxStock;

  qtyEl.textContent = newQty;

  const card    = btn.closest('.product-card');
  const cartBtn = card.querySelector('.add-to-cart-btn');
  if (cartBtn) cartBtn.setAttribute('data-qty', newQty);

  const minusBtn = wrap.querySelector('.qty-btn:first-child');
  const plusBtn  = wrap.querySelector('.qty-btn:last-child');
  minusBtn.disabled = newQty <= 1;
  plusBtn.disabled  = newQty >= maxStock;
}

// ── Build full product card HTML ──
function buildProductCard(product) {
  const isOutOfStock = !product.inStock || product.stock === 0;

  const newBadge     = product.isNew
    ? `<span class="badge badge-new">New</span>` : '';
  const specialBadge = product.isSpecial
    ? `<span class="badge badge-special">Sale</span>` : '';
  const soonBadge    = product.comingSoon
    ? `<span class="badge badge-soon">Coming Soon</span>` : '';

  // Price display
  let priceHTML = '';
  if (product.comingSoon) {
    priceHTML = `<span class="product-price">Coming Soon</span>`;
  } else if (product.isSpecial && product.specialPrice) {
    priceHTML = `
      <span class="product-price">R${product.specialPrice}</span>
      <span class="product-price-original">R${product.price}</span>
    `;
  } else {
    const displayPrice = product.sizes && product.sizes.length > 0
      ? product.sizes[0].price
      : product.price;
    priceHTML = `<span class="product-price">R${displayPrice}</span>`;
  }

  // Cart button
  const firstPrice = product.sizes && product.sizes.length > 0
    ? product.sizes[0].price : product.price;
  const firstSize  = product.sizes && product.sizes.length > 0
    ? product.sizes[0].label : product.size;

  let cartBtnHTML = '';
  if (product.comingSoon) {
    cartBtnHTML = `
      <button class="add-to-cart-btn coming-soon-btn" disabled>
        Coming Soon
      </button>`;
  } else if (isOutOfStock) {
    cartBtnHTML = `
      <button class="add-to-cart-btn out-of-stock-btn" disabled>
        Out of Stock
      </button>`;
  } else {
    cartBtnHTML = `
      <button class="add-to-cart-btn"
              data-id    ="${product.id}"
              data-name  ="${product.name}"
              data-price ="${firstPrice}"
              data-size  ="${firstSize}"
              data-qty   ="1"
              data-image ="${product.image}"
              onclick    ="addToCart(this)">
        Add to Cart
      </button>`;
  }

  // Scent or shade
  const infoLabel = product.shade
    ? `<p class="product-scent">🌈 Shade: ${product.shade}</p>`
    : product.scent
    ? `<p class="product-scent">🕯️ Scent: ${product.scent}</p>`
    : '';

  return `
    <div class="product-card ${isOutOfStock && !product.comingSoon
      ? 'out-of-stock-card' : ''}"
         data-id="${product.id}"
         data-category="${product.category}">

      <!-- Image -->
      <div class="product-image-wrap">
        ${product.image
          ? `<img src="${product.image}"
                  alt="${product.name}"
                  class="product-image ${isOutOfStock
                    ? 'product-image-dim' : ''}"/>`
          : `<div class="product-image-placeholder">🕯️</div>`
        }
        <div class="product-badges">
          ${newBadge}${specialBadge}${soonBadge}
        </div>
        ${getStockBadge(product)}
      </div>

      <!-- Info -->
      <div class="product-info">
        <h3 class="product-name">${product.name}</h3>
        ${infoLabel}
        <p class="product-description">${product.description}</p>

        <div class="product-price-wrap">${priceHTML}</div>

        ${getSizeSelector(product)}
        ${getConsultNotice(product)}
        ${getQuantitySelector(product)}

        <div class="product-cart-wrap">${cartBtnHTML}</div>
      </div>
    </div>
  `;
}

// ── Render all products ──
function renderProducts(category = 'all') {
  const container = document.getElementById('products-container');
  if (!container) return;

  const filtered = category === 'all'
    ? products
    : products.filter(p => p.category === category);

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="no-products">
        <p>No products found in this category yet.</p>
      </div>`;
    return;
  }

  container.innerHTML = filtered.map(buildProductCard).join('');
}

// ── Filter buttons ──
function filterProducts(category, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => {
    b.classList.remove('active');
  });
  btn.classList.add('active');
  renderProducts(category);
}

// ── Run on page load ──
document.addEventListener('DOMContentLoaded', () => {
  renderProducts('all');
});