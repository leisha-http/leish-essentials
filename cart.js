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
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product || product.comingSoon) return;

  let cart = JSON.parse(localStorage.getItem('leish_cart')) || [];
  const existing = cart.find(i => i.id === productId);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: productId, qty: 1 });
  }

  localStorage.setItem('leish_cart', JSON.stringify(cart));
  updateCartCount();
  showToast(`${product.name} added to cart 🛒`);
}

// ── Toast Notification ──
function showToast(message, type = 'success') {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.className = `toast ${type} show`;
  setTimeout(() => {
    toast.className = 'toast';
  }, 3000);
}

// ── Modal: Meet the Product / View Product ──
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

  modalImage.src    = product.image;
  modalImage.alt    = product.name;
  modalCat.textContent  = product.category.replace('-', ' ').toUpperCase();
  modalName.textContent = product.name;
  modalDesc.textContent = product.description;

  // Build details block
  let detailsHTML = '';
  if (product.size)  detailsHTML += `<p>📏 Size: <span>${product.size}</span></p>`;
  if (product.scent) detailsHTML += `<p>🌸 Scent: <span>${product.scent}</span></p>`;
  if (product.shade) detailsHTML += `<p>💋 Shade: <span>${product.shade}</span></p>`;
  if (product.isSpecial) {
    detailsHTML += `<p>🎉 Special Price! Was R${product.price}</p>`;
  }
  modalDetails.innerHTML = detailsHTML;

  const displayPrice = product.isSpecial ? product.specialPrice : product.price;
  modalPrice.textContent = `R${displayPrice}`;

  if (product.comingSoon) {
    modalBtn.textContent  = 'Coming Soon ✨';
    modalBtn.disabled     = true;
    modalBtn.style.opacity = '0.5';
  } else {
    modalBtn.textContent  = 'Add to Cart 🛒';
    modalBtn.disabled     = false;
    modalBtn.style.opacity = '1';
  }

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const overlay = document.getElementById('modalOverlay');
  if (overlay) {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
  currentModalProductId = null;
}

// ── Modal Event Listeners ──
document.addEventListener('DOMContentLoaded', () => {
  const overlay   = document.getElementById('modalOverlay');
  const closeBtn  = document.getElementById('modalClose');
  const addToCartBtn = document.getElementById('modalAddToCart');

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeModal();
    });
  }

  if (addToCartBtn) {
    addToCartBtn.addEventListener('click', () => {
      if (currentModalProductId) {
        addToCart(currentModalProductId);
        closeModal();
      }
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

  // ── Close mobile nav when a link is clicked ──
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

  // ── Init cart count on page load ──
  updateCartCount();
});