// ============================================================
// SHIPPING.JS — Leish Essentials
// Shipping rates based on Gauteng vs rest of SA
// ============================================================

const SHIPPING_RATES = {
  'gauteng-standard': {
    label: 'Gauteng Standard Shipping (3–5 days)',
    cost: 100
  },
  'gauteng-premium': {
    label: 'Gauteng Premium / Next Day Shipping',
    cost: 150
  },
  'national-standard': {
    label: 'Rest of SA Standard Shipping (5–7 days)',
    cost: 200
  },
  'national-premium': {
    label: 'Rest of SA Premium Shipping (2–3 days)',
    cost: 250
  }
};

function getSelectedShipping() {
  const select = document.getElementById('shippingZone');
  if (!select || !select.value) return null;
  return SHIPPING_RATES[select.value] || null;
}