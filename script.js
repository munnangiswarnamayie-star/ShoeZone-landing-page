/*
  ShoeZone Catalog Data
  - No price tags displayed
  - Punchy, engaging copy for sneakerheads & casual buyers
  - Direct links to exact search queries on Amazon India and Flipkart
*/
const shoes = [
  {
    id: "sz-01",
    brand: "Nike",
    name: "Air Jordan 1 Low",
    category: "sneaker",
    vibe: "The undisputed court legend. Rock it with cargos, jeans, or shorts — straight fire every time.",
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80",
    platform: "Amazon",
    link: "https://www.amazon.in/s?k=Nike+Air+Jordan+1+Low"
  },
  {
    id: "sz-02",
    brand: "Adidas Originals",
    name: "Samba OG Leather",
    category: "daily",
    vibe: "The clean low-top that goes with literally everything. An absolute wardrobe staple.",
    image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80",
    platform: "Flipkart",
    link: "https://www.flipkart.com/search?q=Adidas+Originals+Samba+OG"
  },
  {
    id: "sz-03",
    brand: "New Balance",
    name: "574 Core Heritage",
    category: "daily",
    vibe: "All-day comfort with vintage suede details. Perfect for heavy daily rotations.",
    image: "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=800&q=80",
    platform: "Amazon",
    link: "https://www.amazon.in/s?k=New+Balance+574"
  },
  {
    id: "sz-04",
    brand: "Asics",
    name: "Gel-Kayano 14",
    category: "running",
    vibe: "Aggressive Y2K metallic styling packed with cloud-like Gel cushioning.",
    image: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?auto=format&fit=crop&w=800&q=80",
    platform: "Flipkart",
    link: "https://www.flipkart.com/search?q=Asics+Gel+Kayano+14"
  },
  {
    id: "sz-05",
    brand: "Puma",
    name: "Palermo Retro",
    category: "sneaker",
    vibe: "Classic Italian terrace vibe with a gum sole that turns heads wherever you step.",
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=80",
    platform: "Amazon",
    link: "https://www.amazon.in/s?k=Puma+Palermo"
  },
  {
    id: "sz-06",
    brand: "Nike",
    name: "Air Max 90 Infrared",
    category: "sneaker",
    vibe: "Bold exposed Air bubble and unmistakable 90s swagger that never goes out of style.",
    image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&w=800&q=80",
    platform: "Flipkart",
    link: "https://www.flipkart.com/search?q=Nike+Air+Max+90"
  },
  {
    id: "sz-07",
    brand: "Onitsuka Tiger",
    name: "Mexico 66 Classic",
    category: "daily",
    vibe: "Featherlight, sleek, and timeless. The pair you grab when you want effortless style.",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80",
    platform: "Amazon",
    link: "https://www.amazon.in/s?k=Onitsuka+Tiger+Mexico+66"
  },
  {
    id: "sz-08",
    brand: "Nike",
    name: "Pegasus 40",
    category: "running",
    vibe: "Responsive spring in every stride. Built to handle daily miles or marathon weekend walks.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
    platform: "Amazon",
    link: "https://www.amazon.in/s?k=Nike+Pegasus+40"
  }
];

// DOM References
const productGrid = document.getElementById('productGrid');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const filterButtons = document.querySelectorAll('.filter-btn');

let currentFilter = 'all';
let searchQuery = '';

// Render Products Function
function renderProducts() {
  productGrid.innerHTML = '';

  const filtered = shoes.filter(shoe => {
    const matchesCategory = (currentFilter === 'all') || (shoe.category === currentFilter);
    const matchesSearch = shoe.name.toLowerCase().includes(searchQuery) ||
                          shoe.brand.toLowerCase().includes(searchQuery) ||
                          shoe.vibe.toLowerCase().includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    productGrid.innerHTML = `
      <div class="empty-state">
        <h3 style="font-size: 1.4rem; font-weight: 700; color: #fff;">No kicks found</h3>
        <p style="margin-top: 8px;">Try searching another name like "Jordan", "Samba", or clear your filter.</p>
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
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `View ${shoe.brand} ${shoe.name} on ${shoe.platform}`);

    // Direct outward redirect on click or Enter key
    const openDestination = () => window.open(shoe.link, '_blank', 'noopener,noreferrer');
    card.addEventListener('click', openDestination);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') openDestination();
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
          <span class="action-pill">In Stock</span>
        </div>
      </div>
    `;

    productGrid.appendChild(card);
  });
}

// Category Filter Click Events
filterButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    filterButtons.forEach(b => b.classList.remove('active'));
    e.currentTarget.classList.add('active');
    currentFilter = e.currentTarget.getAttribute('data-filter');
    renderProducts();
  });
});

// Search on Button Click
searchBtn.addEventListener('click', () => {
  searchQuery = searchInput.value.toLowerCase().trim();
  renderProducts();
});

// Search dynamically on input or Enter key
searchInput.addEventListener('input', (e) => {
  searchQuery = e.target.value.toLowerCase().trim();
  renderProducts();
});

searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    searchQuery = searchInput.value.toLowerCase().trim();
    renderProducts();
  }
});

// Initial Render
renderProducts();
