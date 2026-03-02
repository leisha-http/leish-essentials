// ══════════════════════════════════════════════
//   LEISH ESSENTIALS — SEARCH LOGIC
// ══════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {

  // ── Elements ──
  const searchInput       = document.getElementById('searchInput');
  const mobileSearchInput = document.getElementById('mobileSearchInput');
  const searchResults     = document.getElementById('searchResults');
  const mobileSearchBtn   = document.getElementById('mobileSearchBtn');
  const mobileSearchBar   = document.getElementById('mobileSearchBar');

  // ── Open mobile search ──
  if (mobileSearchBtn) {
    mobileSearchBtn.addEventListener('click', () => {
      mobileSearchBar.classList.toggle('active');
      if (mobileSearchBar.classList.contains('active')) {
        mobileSearchInput.focus();
      } else {
        mobileSearchInput.value = '';
        if (searchResults) searchResults.innerHTML = '';
        searchResults.style.display = 'none';
      }
    });
  }

  // ── Close mobile search ──
  window.closeMobileSearch = function () {
    if (mobileSearchBar) {
      mobileSearchBar.classList.remove('active');
      mobileSearchInput.value = '';
      if (searchResults) {
        searchResults.innerHTML = '';
        searchResults.style.display = 'none';
      }
    }
  };

  // ── Search function ──
  function performSearch(query) {
    if (!searchResults) return;

    const q = query.toLowerCase().trim();

    if (!q) {
      searchResults.innerHTML = '';
      searchResults.style.display = 'none';
      return;
    }

    // Filter products
    const matches = products.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      (p.scent && p.scent.toLowerCase().includes(q)) ||
      (p.shade && p.shade.toLowerCase().includes(q))
    );

    if (matches.length === 0) {
      searchResults.innerHTML = `
        <div class="search-no-results">
          No products found for "<strong>${query}</strong>" 🌿
        </div>`;
      searchResults.style.display = 'block';
      return;
    }

    // Build results HTML
    searchResults.innerHTML = matches.map(p => {
      const price = p.isSpecial
        ? `<span style="color:var(--gold); font-weight:700;">
             R${p.specialPrice}
           </span>
           <span style="text-decoration:line-through;
                        color:var(--text-light);
                        font-size:0.8rem; margin-left:4px;">
             R${p.price}
           </span>`
        : `<span style="font-weight:700;">R${p.price}</span>`;

      return `
        <div class="search-result-item"
             onclick="handleSearchClick(${p.id})">
          <img src="${p.image}"
               alt="${p.name}"
               onerror="this.style.background='#EDE0D4'; this.src='';"
               style="width:46px; height:46px; object-fit:cover;
                      border-radius:8px; flex-shrink:0;"/>
          <div style="flex:1; min-width:0;">
            <p style="font-weight:700; color:var(--dark-brown);
                      font-size:0.88rem; white-space:nowrap;
                      overflow:hidden; text-overflow:ellipsis;">
              ${p.name}
            </p>
            <p style="color:var(--text-light); font-size:0.78rem;">
              ${p.category.replace(/-/g,' ')}
            </p>
          </div>
          <div style="flex-shrink:0; font-size:0.88rem;">
            ${price}
          </div>
        </div>`;
    }).join('');

    searchResults.style.display = 'block';
  }

  // ── Handle result click ──
  window.handleSearchClick = function(productId) {
    // Close search
    if (searchInput) searchInput.value = '';
    if (mobileSearchInput) mobileSearchInput.value = '';
    if (searchResults) {
      searchResults.innerHTML = '';
      searchResults.style.display = 'none';
    }
    closeMobileSearch();

    // If on shop page open modal directly
    if (typeof openModal === 'function') {
      openModal(productId);
    } else {
      // Otherwise go to shop page with product id
      window.location.href = `shop.html?product=${productId}`;
    }
  };

  // ── Desktop search input listener ──
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      performSearch(searchInput.value);
    });

    // Close on click outside
    document.addEventListener('click', (e) => {
      if (!searchInput.contains(e.target) &&
          !searchResults.contains(e.target)) {
        searchResults.innerHTML = '';
        searchResults.style.display = 'none';
      }
    });
  }

  // ── Mobile search input listener ──
  if (mobileSearchInput) {
    mobileSearchInput.addEventListener('input', () => {
      performSearch(mobileSearchInput.value);
    });
  }

});
