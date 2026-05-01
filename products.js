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

  // ── CANDLES ──
  {
    id          : 1,
    name        : "Crimson Crush Candle",
    category    : "candles",
    description : "A rose sand wax candle. The ultimate centerpiece for an evening of passion.",
    price       : 160,
    size        : "100g",
    scent       : "Rose",
    image       : "IMG-20260314-WA0071.jpg",
    isNew       : true,
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
    id          : 2,
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
    id          : 3,
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
    id          : 4,
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
    id          : 5,
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
    id          : 6,
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
    id          : 7,
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
    id          : 8,
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
    id          : 9,
    name        : "Petal Play Candle",
    category    : "candles",
    description : "A soft floral candle crafted to lift your mood and fill your space with a gentle, blooming aroma. Hand-poured in small batches with care, it’s the perfect “fresh flowers without the mess” vibe for calm mornings, cosy evenings, and everything in between",
    price       : 145,
    size        : "100g",
    scent       : "Rose & vanilla",
    image       : "IMG-20260411-WA0149.jpg",
    isNew       : false,
    isSpecial   : false,
    specialPrice: null,
    comingSoon  : false,
    inStock     : true,
    stock       : 7,
    sizes       : [
      { label: "Small  — 100g", price: 145 },
    ]
  },

  // ── SOAPS (Coming Soon) ──
  {
    id          : 10,
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
    id          : 11,
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
    id          : 12,
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
    id          : 13,
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
  
  // ── GIFT SETS (Mother's Day — Coming Soon) ──
  {
    id          : 14,
    name        : "The Glow Gift Set",
    category    : "gift-sets",
    description : "A beautifully curated Mother's Day gift set featuring our limited edition candle, perfectly gift wrapped with a personalised message card. The perfect way to spoil mum.",
    price       : null,
    size        : "",
    scent       : "",
    image       : "",
    isNew       : true,
    isSpecial   : false,
    specialPrice: null,
    comingSoon  : true,
    inStock     : false,
    stock       : 0,
    sizes       : []
  },

  // ── RESIN STUDIO (Coming Soon) ──
  {
    id          : 15,
    name        : "Resin Studio",
    category    : "resin",
    description : "Something beautiful is being crafted. Our Resin Studio collection is coming soon — unique handmade resin pieces, exclusively from LeishEssentials.",
    price       : null,
    size        : "",
    scent       : "",
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
    return `<span class="stock-badge out-of-stock">
              ✕ Out of Stock
            </span>`;
  }

  if (product.stock <= 5) {
    return `<span class="stock-badge low-stock">
              ⚡ Only ${product.stock} left!
            </span>`;
  }

  return `<span class="stock-badge in-stock">
            ✓ In Stock
          </span>`;
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

// ── Update price when size changes ──
function updatePrice(selectEl, productId) {
  const selectedOption = selectEl.options[selectEl.selectedIndex];
  const newPrice       = selectedOption.getAttribute('data-price');
  const card           = selectEl.closest('.product-card');
  const priceEl        = card.querySelector('.product-price');

  if (priceEl) {
    priceEl.textContent = `R${newPrice}`;
  }

  // Update add to cart button data  const cartBtn = card.querySelector('.add-to-cart-btn');
  if (cartBtn) {
    cartBtn.setAttribute('data-price', newPrice);
    cartBtn.setAttribute('data-size',
      selectedOption.textContent.split('—')[0].trim()
    );
  }
}

// ── Get quantity selector HTML ──
function getQuantitySelector(product) {
  if (product.comingSoon || !product.inStock || product.stock === 0) {
    return '';
  }

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
  const wrap    = btn.closest('.quantity-controls');
  const qtyEl   = wrap.querySelector('.qty-value');
  let current   = parseInt(qtyEl.textContent);
  let newQty    = current + direction;

  // Clamp between 1 and max stock
  if (newQty < 1)        newQty = 1;
  if (newQty > maxStock) newQty = maxStock;

  qtyEl.textContent = newQty;

  // Update add to cart button
  const card    = btn.closest('.product-card');
  const cartBtn = card.querySelector('.add-to-cart-btn');
  if (cartBtn) {
    cartBtn.setAttribute('data-qty', newQty);
  }

  // Disable minus button at 1
  const minusBtn = wrap.querySelector('.qty-btn:first-child');
  const plusBtn  = wrap.querySelector('.qty-btn:last-child');
  minusBtn.disabled = newQty <= 1;
  plusBtn.disabled  = newQty >= maxStock;
}

// ── Build full product card HTML ──
function buildProductCard(product) {
  const isOutOfStock = !product.inStock || product.stock === 0;

  // Badges
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
    // Show first size price if sizes exist
    const displayPrice = product.sizes && product.sizes.length > 0
      ? product.sizes[0].price
      : product.price;
    priceHTML = `<span class="product-price">R${displayPrice}</span>`;
  }

  // Add to cart button
  const firstPrice = product.sizes && product.sizes.length > 0
    ? product.sizes[0].price
    : product.price;
  const firstSize  = product.sizes && product.sizes.length > 0
    ? product.sizes[0].label
    : product.size;

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

  // Scent or shade info
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
                  class="product-image
                  ${isOutOfStock ? 'product-image-dim' : ''}"/>`
          : `<div class="product-image-placeholder">🕯️</div>`
        }
        <div class="product-badges">
          ${newBadge}
          ${specialBadge}
          ${soonBadge}
        </div>
        ${getStockBadge(product)}
      </div>

      <!-- Info -->
      <div class="product-info">
        <h3 class="product-name">${product.name}</h3>
        ${infoLabel}
        <p class="product-description">${product.description}</p>

        <!-- Price -->
        <div class="product-price-wrap">
          ${priceHTML}
        </div>

        <!-- Size selector -->
        ${getSizeSelector(product)}

        <!-- Quantity selector -->
        ${getQuantitySelector(product)}

        <!-- Add to cart -->
        <div class="product-cart-wrap">
          ${cartBtnHTML}
        </div>
      </div>
    </div>
  `;
}

// ── Render all products into a container ──
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
  // Update active button
  document.querySelectorAll('.filter-btn').forEach(b => {
    b.classList.remove('active');
  });
  btn.classList.add('active');

  // Re-render
  renderProducts(category);
}

// ── Run on page load ──
document.addEventListener('DOMContentLoaded', () => {
  renderProducts('all');
});