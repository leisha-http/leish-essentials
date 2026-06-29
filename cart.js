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


let modalImageIndex = 0;

function getProductImages(product) {
  // Use product.images if provided, otherwise fall back to product.image
  if (product && Array.isArray(product.images) && product.images.length > 0) {
    return product.images;
  }
  return product && product.image ? [product.image] : [];
}

function renderModalImage(index, images, modalImage) {
  if (!images || images.length === 0) return;

  modalImageIndex = Math.max(0, Math.min(index, images.length - 1));
  modalImage.src = images[modalImageIndex];
  modalImage.alt = modalImage.getAttribute('data-alt') || '';
}

function updateGalleryButtons(images) {
  const prevBtn = document.getElementById('modalPrevImage');
  const nextBtn = document.getElementById('modalNextImage');

  if (!prevBtn || !nextBtn) return;

  if (!images || images.length <= 1) {
    prevBtn.style.display = 'none';
    nextBtn.style.display = 'none';
    return;
  }

  prevBtn.style.display = 'inline-flex';
  nextBtn.style.display = 'inline-flex';

  prevBtn.disabled = modalImageIndex <= 0;
  nextBtn.disabled = modalImageIndex >= images.length - 1;
}

// ── MODAL ──
let currentModalProductId = null;

function openModal(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  currentModalProductId = productId;
  document.addEventListener('click', (e) => {
  const btn = e.target.closest && e.target.closest('.letter-pick-btn');
  if (!btn) return;

  // Only handle alphabet modal clicks
  const letterGrid = btn.closest('#modalLetterGrid');
  if (!letterGrid) return;

  // Toggle selection
  btn.classList.toggle('selected-letter');

  const isSelected = btn.classList.contains('selected-letter');
  btn.style.background = isSelected ? '#000' : 'var(--warm-white)';
  btn.style.color = isSelected ? '#fff' : 'var(--dark-brown)';

  const selectedBtns = letterGrid.querySelectorAll('.letter-pick-btn.selected-letter');
  const letters = Array.from(selectedBtns).map(b => b.getAttribute('data-letter'));

  const pricePerLetter = selectedBtns.length
    ? parseFloat(selectedBtns[0].getAttribute('data-letter-price')) || 0
    : 0;

  const selectedPrice = letters.length * pricePerLetter;

  // Update hidden select for add-to-cart
  const sizeSelect = document.getElementById('modalSizeSelect');
  if (sizeSelect) {
    sizeSelect.innerHTML = '';
    const opt = document.createElement('option');
    opt.textContent = `${letters.length ? letters.join(' + ') : 'None'} — R${selectedPrice}`;
    opt.setAttribute('data-price', selectedPrice);
    sizeSelect.appendChild(opt);
    sizeSelect.selectedIndex = 0;
  }

  // Update visible text (this is the part showing "None")
  const selectedText = document.getElementById('modalSelectedLettersText');
  if (selectedText) {
    selectedText.innerHTML = `Selected: <b>${letters.length ? letters.join(' + ') : 'None'}</b>`;
  }

  // Update total text if you have it
  const totalText = document.getElementById('modalLettersTotalText');
  if (totalText) {
    totalText.innerHTML = `Letters Total: <b>R${selectedPrice}</b>`;
  }
});

  const overlay      = document.getElementById('modalOverlay');
  const modalImage   = document.getElementById('modalImage');
  const modalCat     = document.getElementById('modalCategory');
  const modalName    = document.getElementById('modalName');
  const modalDesc    = document.getElementById('modalDesc');
  const modalDetails = document.getElementById('modalDetails');
  const modalPrice   = document.getElementById('modalPrice');
  const modalBtn     = document.getElementById('modalAddToCart');

  // ── Gallery setup ──
  const images = getProductImages(product);

  // Store alt text once
  modalImage.setAttribute('data-alt', product.name);

  // Replace image with first in gallery
  renderModalImage(0, images, modalImage);

  // Add Prev/Next buttons (only once)
  // Ensure these buttons exist in the modal. We create them dynamically here.
  const modalPaper = overlay ? overlay.querySelector('.modal-paper') : null;
  if (modalPaper) {
    const existingPrev = document.getElementById('modalPrevImage');
    const existingNext = document.getElementById('modalNextImage');

    if (!existingPrev) {
      const prevBtn = document.createElement('button');
      prevBtn.id = 'modalPrevImage';
      prevBtn.type = 'button';
      prevBtn.textContent = '←';
      prevBtn.style.cssText = `
        position:absolute;
        top: 110px;
        left: 12px;
        width: 40px;
        height: 40px;
        border-radius: 999px;
        border: 1px solid var(--border);
        background: var(--warm-white);
        cursor: pointer;
        font-size: 1.2rem;
        display: none;
        align-items: center;
        justify-content: center;
      `;
      prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        modalImageIndex = Math.max(0, modalImageIndex - 1);
        renderModalImage(modalImageIndex, images, modalImage);
        updateGalleryButtons(images);
      });
      modalPaper.appendChild(prevBtn);
    }

    if (!existingNext) {
      const nextBtn = document.createElement('button');
      nextBtn.id = 'modalNextImage';
      nextBtn.type = 'button';
      nextBtn.textContent = '→';
      nextBtn.style.cssText = `
        position:absolute;
        top: 110px;
        right: 12px;
        width: 40px;
        height: 40px;
        border-radius: 999px;
        border: 1px solid var(--border);
        background: var(--warm-white);
        cursor: pointer;
        font-size: 1.2rem;
        display: none;
        align-items: center;
        justify-content: center;
      `;
      nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        modalImageIndex = Math.min(images.length - 1, modalImageIndex + 1);
        renderModalImage(modalImageIndex, images, modalImage);
        updateGalleryButtons(images);
      });
      modalPaper.appendChild(nextBtn);
    }
  }

  // Set modal text content (your existing logic)
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

  
// Show sizes or alphabet options in modal
if (!product.comingSoon) {
  // Normal products with sizes
  if (product.sizes && product.sizes.length > 0) {
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

  // Alphabet products with multi-letter options (except product 12)
  else if (product.options && product.options.length > 0) {
    const letterButtons = product.options.map(o => `
      <button
        type="button"
        class="letter-pick-btn"
        data-letter="${o.value}"
        data-letter-price="${o.price}"
        style="
          width:42px;height:42px;border-radius:10px;
          border:1px solid var(--border);
          background:var(--warm-white);
          color:var(--dark-brown);
          font-weight:700;
          cursor:pointer;">
    
        ${o.label}
      </button>
    `).join(''); 

    detailsHTML += `
      <div style="margin-top:10px;">
        <p style="font-size:0.75rem;letter-spacing:2px;text-transform:uppercase;margin-bottom:10px;">
          Select Letters
        </p>

        <div id="modalLetterGrid"
             style="display:flex;flex-wrap:wrap;gap:8px;max-width:320px;">
          ${letterButtons}
        </div>
        

        <p style="margin-top:10px;font-size:0.85rem;color:var(--text-light);">
          Selected: <b id="modalSelectedLettersText">None</b>
        </p>
        <p style="margin-top:4px;font-size:0.85rem;color:var(--text-light);">
          Letters Total: <b id="modalLettersTotalText">R0</b>
        </p>
         
      </div>

      <div style="margin-top:12px;">
        <p style="font-size:0.75rem;letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;">
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

    // Set initial modal price for alphabet items to R0
    modalPrice.textContent = 'R0';
  }
}

  modalDetails.innerHTML = detailsHTML;
  
bindAlphabetGridEvents();
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

  // Show gallery buttons correctly
  modalImageIndex = 0;
  updateGalleryButtons(images);

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

function toggleLetter(btn) {
  btn.classList.toggle('selected-letter');

  const grid = btn.closest('#modalLetterGrid');
  if (!grid) return;

  const selectedBtns = Array.from(grid.querySelectorAll('.letter-pick-btn.selected-letter'));
  const letters = selectedBtns.map(b => b.getAttribute('data-letter'));

  const selectedText = document.getElementById('modalSelectedLettersText');
  if (selectedText) {
    selectedText.innerHTML = `Selected: <b>${letters.length ? letters.join(' + ') : 'None'}</b>`;
  }

  const totalText = document.getElementById('modalLettersTotalText');
  if (totalText) {
    const pricePerLetter = selectedBtns.length
      ? parseFloat(selectedBtns[0].getAttribute('data-letter-price')) || 0
      : 0;

    const lettersTotal = letters.length * pricePerLetter;
    totalText.innerHTML = `Letters Total: <b>R${lettersTotal}</b>`;
  }
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
function bindAlphabetGridEvents() {
  const grid = document.getElementById('modalLetterGrid');
  const sizeSelect = document.getElementById('modalSizeSelect');
  if (!grid || !sizeSelect) return;

  grid.onclick = (e) => {
    const btn = e.target.closest('.letter-pick-btn');
    if (!btn) return;

    btn.classList.toggle('selected-letter');

    const selectedBtns = grid.querySelectorAll('.letter-pick-btn.selected-letter');
    const letters = Array.from(selectedBtns).map(b => b.getAttribute('data-letter'));

    // Toggle button color
    btn.style.background = btn.classList.contains('selected-letter') ? '#000' : 'var(--warm-white)';
    btn.style.color = btn.classList.contains('selected-letter') ? '#fff' : 'var(--dark-brown)';

    // Update hidden select option for your existing add-to-cart handler
    const pricePerLetter = letters.length
      ? parseFloat(selectedBtns[0].getAttribute('data-letter-price')) || 0
      : 0;

    const totalLettersPrice = letters.length * pricePerLetter;

    sizeSelect.innerHTML = '';
    const opt = document.createElement('option');
    opt.textContent = `${letters.length ? letters.join(' + ') : 'None'} — R${totalLettersPrice}`;
    opt.setAttribute('data-price', totalLettersPrice);
    sizeSelect.appendChild(opt);
    sizeSelect.selectedIndex = 0;

    // Optional text update
    const selectedText = document.getElementById('modalSelectedLettersText');
    if (selectedText) selectedText.innerHTML = `Selected: <b>${letters.length ? letters.join(' + ') : 'None'}</b>`;
  };
}