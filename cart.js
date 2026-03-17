// ══════════════════════════════════════
//   LEISH ESSENTIALS — GLOBAL CART JS
// ══════════════════════════════════════

// ── Update cart count badge on all pages ──
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('leish_cart')) || [];
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  const countEls = document.querySelectorAll('#cartCount');
  countEls.forEach(el => {
    el.textContent = totalQty;
    el.style.display = totalQty > 0 ? 'flex' : 'none';
  });
}

// ── Add to Cart ──
// Now accepts optional size, qty and price
// so the size selector and quantity picker work!
function addToCart(productId, selectedSize = null, qty = 1, selectedPrice = null) {
  const product = products.find(p => p.id === productId);
  if (!product || product.comingSoon) return;

  // If product is out of stock block it
  if (!product.inStock || product.stock === 0) {
    showToast(`${product.name} is out of stock 😞`, 'error');
    return;
  }

  // Work out the price to use
  // Priority: selectedPrice → specialPrice → first size price → base price
  let priceToUse = selectedPrice
    ? parseFloat(selectedPrice)
    : product.isSpecial && product.specialPrice
      ? product.specialPrice
      : product.sizes && product.sizes.length > 0
        ? product.sizes[0].price
        : product.price;

  // Work out the size label to use
  let sizeToUse = selectedSize
    ? selectedSize
    : product.sizes && product.sizes.length > 0
      ? product.sizes[0].label
      : product.size || '';

  let cart = JSON.parse(localStorage.getItem('leish_cart')) || [];

  // Match by BOTH id AND size so different sizes are separate cart items
  const existing = cart.find(i =>
    i.id === productId && i.size === sizeToUse
  );

  if (existing) {
    existing.qty   += qty;
    existing.price  = priceToUse; // update price in case it changed
  } else {
    cart.push({
      id   : productId,
      name : product.name,
      image: product.image,
      size : sizeToUse,
      price: priceToUse,
      qty  : qty
    });
  }

  localStorage.setItem('leish_cart', JSON.stringify(cart));
  updateCartCount();

  // Show size in toast if available
  const sizeMsg = sizeToUse ? ` (${sizeToUse})` : '';
  showToast(`${product.name}${sizeMsg} added to cart 🛒`);
}

// ── Add to Cart from button (called by shop card buttons) ──
function addToCartFromBtn(btn) {
  const id    = parseInt(btn.getAttribute('data-id'));
  const price = parseFloat(btn.getAttribute('data-price'));
  const size  = btn.getAttribute('data-size');
  const qty   = parseInt(btn.getAttribute('data-qty')) || 1;

  addToCart(id, size, qty, price);
}

// ── Toast Notification ──
function showToast(message, type = 'success') {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.className   = `toast ${type} show`;
  setTimeout(() => {
    toast.className = 'toast';
  }, 3000);
}

// ══════════════════════════════════════
//   MODAL
// ══════════════════════════════════════

let currentModalProductId = null;

function openModal(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  currentModalProductId = productId;

  const overlay      = document.getElementById('modalOverlay');
  const modalImage   = document.getElementById('modalImage');
  const modalCat     = document.getElementById('modalCategory');
  const modalName    = document.getElementById('modalName');
  const modalDesc    = document.getElementById('modalDesc');
  const modalDetails = document.getElementById('modalDetails');
  const modalPrice   = document.getElementById('modalPrice');
  const modalBtn     = document.getElementById('modalAddToCart');

  modalImage.src        = product.image;
  modalImage.alt        = product.name;
  modalCat.textContent  = product.category.replace('-', ' ').toUpperCase();
  modalName.textContent = product.name;
  modalDesc.textContent = product.description;

  // ── Details block ──
  let detailsHTML = '';
  if (product.size)     detailsHTML += `<p>📏 Size: <span>${product.size}</span></p>`;
  if (product.scent)    detailsHTML += `<p>🌸 Scent: <span>${product.scent}</span></p>`;
  if (product.shade)    detailsHTML += `<p>💋 Shade: <span>${product.shade}</span></p>`;
  if (product.isSpecial) detailsHTML += `<p>🎉 Special Price! Was R${product.price}</p>`;

  // Show stock status in modal too
  if (!product.comingSoon) {
    if (!product.inStock || product.stock === 0) {
      detailsHTML += `<p style="color:#e74c3c;">✕ Out of Stock</p>`;
    } else if (product.stock <= 5) {
      detailsHTML += `<p style="color:#f39c12;">⚡ Only ${product.stock} left!</p>`;
    } else {
      detailsHTML += `<p style="color:#27ae60;">✓ In Stock</p>`;
    }
  }

  // Show sizes in modal
  if (product.sizes && product.sizes.length > 0 && !product.comingSoon) {
    detailsHTML += `
      <div style="margin-top:10px;">
        <p style="font-size:0.75rem;letter-spacing:2px;
                  text-transform:uppercase;margin-bottom:6px;">
          Select Size
        </p>
        <select id="modalSizeSelect"
                style="width:100%;padding:8px 10px;
                       border:1px solid var(--border);
                       background:var(--warm-white);
                       color:var(--dark-brown);
                       font-size:0.83rem;
                       font-family:var(--font-body);"
                onchange="updateModalPrice(this, ${product.id})">
          ${product.sizes.map((s, i) =>
            `<option value="${i}"
                     data-price="${s.price}">
               ${s.label} — R${s.price}
             </option>`
          ).join('')}
        </select>
      </div>
      <div style="margin-top:10px;">
        <p style="font-size:0.75rem;letter-spacing:2px;
                  text-transform:uppercase;margin-bottom:6px;">
          Quantity
        </p>
        <div style="display:flex;align-items:center;
                    border:1px solid var(--border);
                    width:fit-content;">
          <button onclick="changeModalQty(-1, ${product.stock})"
                  id="modalQtyMinus"
                  style="width:34px;height:34px;border:none;
                         background:var(--warm-white);
                         font-size:1rem;cursor:pointer;">−</button>
          <span id="modalQtyValue"
                style="width:38px;text-align:center;
                       font-size:0.9rem;font-weight:600;
                       border-left:1px solid var(--border);
                       border-right:1px solid var(--border);
                       padding:6px 0;">1</span>
          <button onclick="changeModalQty(1, ${product.stock})"
                  id="modalQtyPlus"
                  style="width:34px;height:34px;border:none;
                         background:var(--warm-white);
                         font-size:1rem;cursor:pointer;">+</button>
        </div>
      </div>
    `;
  }

  modalDetails.innerHTML = detailsHTML;

  // Display price — use first size price if available
  const displayPrice = product.sizes && product.sizes.length > 0
    ? product.sizes[0].price
    : product.isSpecial && product.specialPrice
      ? product.specialPrice
      : product.price;

  modalPrice.textContent = `R${displayPrice}`;

  // Button state
  const isOutOfStock = !product.inStock || product.stock === 0;
  if (product.comingSoon) {
    modalBtn.textContent   = 'Coming Soon ✨';
    modalBtn.disabled      = true;
    modalBtn.style.opacity = '0.5';
  } else if (isOutOfStock) {
    modalBtn.textContent   = 'Out of Stock';
    modalBtn.disabled      = true;
    modalBtn.style.opacity = '0.5';
  } else {
    modalBtn.textContent   = 'Add to Cart 🛒';
    modalBtn.disabled      = false;
    modalBtn.style.opacity = '1';
  }

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// ── Update modal price when size changes ──
function updateModalPrice(selectEl, productId) {
  const selectedOption = selectEl.options[selectEl.selectedIndex];
  const newPrice       = selectedOption.getAttribute('data-price');
  const modalPrice     = document.getElementById('modalPrice');
  if (modalPrice) modalPrice.textContent = `R${newPrice}`;
}

// ── Change quantity in modal ──
function changeModalQty(direction, maxStock) {
  const qtyEl    = document.getElementById('modalQtyValue');
  const minusBtn = document.getElementById('modalQtyMinus');
  const plusBtn  = document.getElementById('modalQtyPlus');
  if (!qtyEl) return;

  let current = parseInt(qtyEl.textContent);
  let newQty  = current + direction;

  if (newQty < 1)        newQty = 1;
  if (newQty > maxStock) newQty = maxStock;

  qtyEl.textContent     = newQty;
  minusBtn.disabled     = newQty <= 1;
  plusBtn.disabled      = newQty >= maxStock;
}

function closeModal() {
  const overlay = document.getElementById('modalOverlay');
  if (overlay) {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
  currentModalProductId = null;
}

// ══════════════════════════════════════
//   EVENT LISTENERS
// ══════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  const overlay      = document.getElementById('modalOverlay');
  const closeBtn     = document.getElementById('modalClose');
  const addToCartBtn = document.getElementById('modalAddToCart');

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeModal();
    });
  }

  // ── Modal add to cart ──
  // Now reads size and qty from the modal selectors
  if (addToCartBtn) {
    addToCartBtn.addEventListener('click', () => {
      if (!currentModalProductId) return;

      const sizeSelect = document.getElementById('modalSizeSelect');
      const qtyEl      = document.getElementById('modalQtyValue');

      const selectedSize = sizeSelect
        ? sizeSelect.options[sizeSelect.selectedIndex].textContent
            .split('—')[0].trim()
        : null;

      const selectedPrice = sizeSelect
        ? parseFloat(sizeSelect.options[sizeSelect.selectedIndex]
            .getAttribute('data-price'))
        : null;

      const qty = qtyEl ? parseInt(qtyEl.textContent) : 1;

      addToCart(currentModalProductId, selectedSize, qty, selectedPrice);
      closeModal();
    });
  }

  // ── Hamburger Menu ──
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
    });
  }

  // ── Close mobile nav on link click ──
  const mobileLinks = document.querySelectorAll('.mobile-nav a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
    });
  });

  // ── Close modal on Escape key ──
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // ── Init cart count ──
  updateCartCount();
});

// ══════════════════════════════════════
//   SHIPPING
// ══════════════════════════════════════

function calculateShipping(subtotal, shippingType) {
  if (subtotal >= shippingRates.freeShippingThreshold) return 0;
  return shippingRates[shippingType] || 0;
}