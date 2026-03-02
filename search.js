// ══════════════════════════════════════
//   LEISH ESSENTIALS — SEARCH JS
// ══════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  const searchInput   = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');

  if (!searchInput || !searchResults) return;

  // ── Show results on input ──
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim().toLowerCase();

    if (query.length < 2) {
      searchResults.style.display = 'none';
      searchResults.innerHTML = '';
      return;
    }

    const matched = products.filter(p =>
      p.name.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      (p.scent && p.scent.toLowerCase().includes(query)) ||
      (p.shade && p.shade.toLowerCase().includes(query))
    );

    if (matched.length === 0) {
      searchResults.style.display = 'block';
      searchResults.innerHTML = `
        <div style="padding:20px; text-align:center;
                    color:var(--text-light); font-size:0.9rem;">
          No products found for "<strong>${query}</strong>" 🌿
        </div>`;
      return;
    }

    searchResults.innerHTML = '';
    searchResults.style.display = 'block';

    matched.forEach(product => {
      const price = product.isSpecial ? product.specialPrice : product.price;
      const item  = document.createElement('div');
      item.className = 'search-result-item';
      item.innerHTML = `
        <img src="${product.image}" alt="${product.name}"/>
        <div class="search-result-info">
          <h4>${product.name}</h4>
          <p>${product.comingSoon ? 'Coming Soon ✨' : `R${price}`}</p>
        </div>
        ${product.comingSoon
          ? '<span style="font-size:0.75rem; color:var(--text-light); margin-left:auto;">Soon</span>'
          : `<button class="btn btn-gold"
               style="padding:6px 12px; font-size:0.75rem; margin-left:auto; white-space:nowrap;"
               onclick="addToCart(${product.id}); closeSearch();">
               Add 🛒
             </button>`
        }
      `;

      // Click on result item → go to shop filtered by category
      item.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') return;
        window.location.href = `shop.html?category=${product.category}`;
      });

      searchResults.appendChild(item);
    });
  });

  // ── Close search results ──
  function closeSearch() {
    searchResults.style.display = 'none';
    searchResults.innerHTML = '';
    searchInput.value = '';
  }

  // Make closeSearch globally available (used in button onclick above)
  window.closeSearch = closeSearch;

  // ── Close when clicking outside ──
  document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
      searchResults.style.display = 'none';
    }
  });

  // ── Close on Escape ──
  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeSearch();

    // Enter key → go to shop with search query
    if (e.key === 'Enter') {
      const query = searchInput.value.trim();
      if (query.length > 0) {
        window.location.href = `shop.html?search=${encodeURIComponent(query)}`;
      }
    }
  });
});