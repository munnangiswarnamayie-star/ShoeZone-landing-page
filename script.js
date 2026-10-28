/*
  ShoeZone Catalog Data
  - Price fields are intentionally omitted.
  - Clicking any card sends users directly to the specific product on Amazon.in or Flipkart.com.
*/
const shoes = [
  {
    id: "sz-01",
    brand: "Nike",
    name: "Air Jordan 1 Low",
    category: "sneaker",
    vibe: "Timeless court silhouette redesigned for casual everyday street wear.",
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80",
    platform: "Amazon",
    link: "https://www.amazon.in/s?k=Nike+Air+Jordan+1+Low"
  },
  {
    id: "sz-02",
    brand: "Adidas Originals",
    name: "Samba OG Leather",
    category: "daily",
    vibe: "Low-profile gum-sole terrace classic engineered for daily rotations.",
    image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80",
    platform: "Flipkart",
    link: "https://www.flipkart.com/search?q=Adidas+Originals+Samba+OG"
  },
  {
    id: "sz-03",
    brand: "New Balance",
    name: "574 Core Heritage",
    category: "daily",
    vibe: "Hybrid road/trail profile with premium suede and unmatched stability.",
    image: "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=800&q=80",
    platform: "Amazon",
    link: "https://www.amazon.in/s?k=New+Balance+574"
  },
  {
    id: "sz-04",
    brand: "Asics",
    name: "Gel-Kayano 14",
    category: "running",
    vibe: "Late-2000s technical aesthetics powered by Gel cushioning technology.",
    image: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?auto=format&fit=crop&w=800&q=80",
    platform: "Flipkart",
    link: "https://www.flipkart.com/search?q=Asics+Gel+Kayano+14"
  },
  {
    id: "sz-05",
    brand: "Puma",
    name: "Palermo Retro",
    category: "sneaker",
    vibe: "Archival indoor classic featuring retro suede overlays and signature tag.",
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=80",
    platform: "Amazon",
    link: "https://www.amazon.in/s?k=Puma+Palermo"
  },
  {
    id: "sz-06",
    brand: "Nike",
    name: "Air Max 90 Infrared",
    category: "sneaker",
    vibe: "Exposed Air Max bubble cushioning with sharp 90s architectural lines.",
    image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&w=800&q=80",
    platform: "Flipkart",
    link: "https://www.flipkart.com/search?q=Nike+Air+Max+90"
  },
  {
    id: "sz-07",
    brand: "Onitsuka Tiger",
    name: "Mexico 66 Classic",
    category: "daily",
    vibe: "Ultra-slim vintage running icon with iconic cross stripes.",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80",
    platform: "Amazon",
    link: "https://www.amazon.in/s?k=Onitsuka+Tiger+Mexico+66"
  },
  {
    id: "sz-08",
    brand: "Nike",
    name: "Pegasus 40",
    category: "running",
    vibe: "Workhorse daily runner with engineered mesh and responsive React foam.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
    platform: "Amazon",
    link: "https://www.amazon.in/s?k=Nike+Pegasus+40"
  }
];

// DOM Elements
const productGrid = document.getElementById('productGrid');
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter-btn');

let currentFilter = 'all';
let searchQuery = '';

// Render Cards
function renderProducts() {
  productGrid.innerHTML = '';

  const filtered = shoes.filter(shoe => {
    const matchesCategory = (currentFilter === 'all') || (shoe.category === currentFilter);
    const matchesSearch = shoe.name.toLowerCase().includes(searchQuery) ||
                          shoe.brand.toLowerCase().includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    productGrid.innerHTML = `
      <div class="empty-state">
        <h3>No models found</h3>
        <p style="margin-top: 8px;">Try refining your search keyword or selecting a different category.</p>
      </div>
    `;
    return;
  }

  filtered.forEach(shoe => {
    const isAmazon = shoe.platform.toLowerCase() === 'amazon';
    const badgeClass = isAmazon ? 'badge-amazon' : 'badge-flipkart';

    const card = document.createElement('article');
    card.className = 'shoe-card';
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `View ${shoe.brand} ${shoe.name} on ${shoe.platform}`);

    // Direct Redirection Event on Click
    card.addEventListener('click', () => {
      window.open(shoe.link, '_blank', 'noopener,noreferrer');
    });

    card.innerHTML = `
      <div class="image-container">
        <span class="category-tag">${shoe.category}</span>
        <span class="platform-badge ${badgeClass}">${shoe.platform}</span>
        <img src="${shoe.image}" alt="${shoe.name}" loading="lazy">
      </div>
      <div class="card-info">
        <div>
          <p class="brand-name">${shoe.brand}</p>
          <h2 class="shoe-title">${shoe.name}</h2>
          <p class="shoe-vibe">${shoe.vibe}</p>
        </div>
        <div class="card-action">
          <span class="action-text">Shop on ${shoe.platform} <span class="arrow-icon">→</span></span>
          <span class="action-pill">Live Stock</span>
        </div>
      </div>
    `;

    productGrid.appendChild(card);
  });
}

// Filter Button Click Listeners
filterButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    filterButtons.forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    currentFilter = e.target.getAttribute('data-filter');
    renderProducts();
  });
});

// Search Filter Input Listener
searchInput.addEventListener('input', (e) => {
  searchQuery = e.target.value.toLowerCase().trim();
  renderProducts();
});

// Initial render on script load
renderProducts();
