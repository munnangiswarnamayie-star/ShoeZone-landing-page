const products = [
  {
    id: 1,
    name: "Campus OG-29",
    brand: "Campus",
    category: "casual",
    type: "Daily essential",
    price: 1299,
    badge: "Everyday pick",
    description: "An easy everyday silhouette for casual plans and daily miles.",
    retailer: "Flipkart",
    url: "https://www.flipkart.com/campus-og-29-sneakers-men/p/itm45d46d41feb92",
    glow: "#35452b",
    light: "#f4f4e9",
    mid: "#aeb9a5",
    dark: "#566650",
    accent: "#c6ff4d"
  },
  {
    id: 2,
    name: "PUMA Zod Runner V3",
    brand: "PUMA",
    category: "sport",
    type: "Sport / Active",
    price: 2499,
    badge: "Runner energy",
    description: "A sporty runner-inspired pick for a fast-moving everyday rotation.",
    retailer: "Flipkart",
    url: "https://www.flipkart.com/puma-zod-runner-v3-idp-running-shoes-men/p/itm92e03d2d421fa",
    glow: "#253b3b",
    light: "#e7eee9",
    mid: "#9baea5",
    dark: "#314942",
    accent: "#c6ff4d"
  },
  {
    id: 3,
    name: "PUMA Rickie Classic",
    brand: "PUMA",
    category: "street",
    type: "Street classic",
    price: 2799,
    badge: "Clean classic",
    description: "A clean, versatile look that pairs easily with everyday fits.",
    retailer: "Amazon",
    url: "https://www.amazon.in/s?k=PUMA+Rickie+Classic+shoes",
    glow: "#30332d",
    light: "#f4f0e6",
    mid: "#b4b5a8",
    dark: "#45493f",
    accent: "#e8e5d9"
  },
  {
    id: 4,
    name: "Red Tape Lifestyle",
    brand: "Red Tape",
    category: "casual",
    type: "Casual / Lifestyle",
    price: 1599,
    badge: "City mode",
    description: "A laid-back lifestyle look for campus days and weekend plans.",
    retailer: "Amazon",
    url: "https://www.amazon.in/s?k=Red+Tape+lifestyle+sneakers",
    glow: "#433027",
    light: "#e9d7c6",
    mid: "#b78e72",
    dark: "#594337",
    accent: "#d6b49a"
  },
  {
    id: 5,
    name: "Sparx Casual Sneakers",
    brand: "Sparx",
    category: "casual",
    type: "Everyday casual",
    price: 999,
    badge: "Easy wear",
    description: "A budget-friendly casual style for your regular rotation.",
    retailer: "Amazon",
    url: "https://www.amazon.in/s?k=Sparx+casual+sneakers",
    glow: "#2e3435",
    light: "#dce2df",
    mid: "#8c9997",
    dark: "#394341",
    accent: "#c6ff4d"
  },
  {
    id: 6,
    name: "Campus Camp Clint",
    brand: "Campus",
    category: "street",
    type: "Street / Casual",
    price: 1399,
    badge: "Street ready",
    description: "A casual streetwear-friendly pick for everyday outfits.",
    retailer: "Amazon",
    url: "https://www.amazon.in/s?k=Campus+Camp+Clint+shoes",
    glow: "#34352a",
    light: "#e6e2cb",
    mid: "#aaa58b",
    dark: "#494b3c",
    accent: "#c6ff4d"
  },
  {
    id: 7,
    name: "Asian Casual Sneakers",
    brand: "ASIAN",
    category: "sport",
    type: "Active casual",
    price: 899,
    badge: "Light on feet",
    description: "A sporty casual profile for everyday errands and movement.",
    retailer: "Amazon",
    url: "https://www.amazon.in/s?k=ASIAN+casual+sneakers",
    glow: "#2b3541",
    light: "#e4e8f0",
    mid: "#a0adbd",
    dark: "#46556a",
    accent: "#8bdcff"
  },
  {
    id: 8,
    name: "Skechers Summits",
    brand: "Skechers",
    category: "sport",
    type: "Comfort / Active",
    price: 3299,
    badge: "Comfort mode",
    description: "A comfort-led sporty style for long days on the move.",
    retailer: "Amazon",
    url: "https://www.amazon.in/s?k=Skechers+Summits+shoes",
    glow: "#303a39",
    light: "#e7eae4",
    mid: "#a9b2a8",
    dark: "#46534c",
    accent: "#c6ff4d"
  },
  {
    id: 9,
    name: "PUMA Smashic",
    brand: "PUMA",
    category: "street",
    type: "Court-inspired",
    price: 2199,
    badge: "Minimal mood",
    description: "A minimal court-inspired style with a versatile everyday feel.",
    retailer: "Amazon",
    url: "https://www.amazon.in/s?k=PUMA+Smashic+shoes",
    glow: "#35302e",
    light: "#f1e9e0",
    mid: "#b9aaa0",
    dark: "#50443e",
    accent: "#f2eee8"
  },
  {
    id: 10,
    name: "BOLDFIT Klassics",
    brand: "BOLDFIT",
    category: "casual",
    type: "Daily casual",
    price: 1199,
    badge: "Fresh rotation",
    description: "A simple everyday option for relaxed, casual styling.",
    retailer: "Amazon",
    url: "https://www.amazon.in/s?k=BOLDFIT+Klassics+sneakers",
    glow: "#343b2b",
    light: "#e4e8d7",
    mid: "#aab39b",
    dark: "#46513a",
    accent: "#c6ff4d"
  },
  {
    id: 11,
    name: "Woodland Lace-Ups",
    brand: "Woodland",
    category: "street",
    type: "Outdoor casual",
    price: 2999,
    badge: "Rugged mood",
    description: "A rugged-inspired casual look for off-duty outfits.",
    retailer: "Amazon",
    url: "https://www.amazon.in/s?k=Woodland+casual+lace+up+shoes",
    glow: "#43362a",
    light: "#d9c4a5",
    mid: "#a48766",
    dark: "#554331",
    accent: "#c6ff4d"
  },
  {
    id: 12,
    name: "Echor Casual Sneakers",
    brand: "Echor",
    category: "casual",
    type: "Everyday style",
    price: 1099,
    badge: "Easy everyday",
    description: "A relaxed sneaker option for simple everyday outfits.",
    retailer: "Amazon",
    url: "https://www.amazon.in/s?k=Echor+casual+sneakers",
    glow: "#34313c",
    light: "#e5e0ec",
    mid: "#a9a0b7",
    dark: "#4c4559",
    accent: "#c6ff4d"
  }
];

const grid = document.querySelector("#productGrid");
const searchInput = document.querySelector("#searchInput");
const sortSelect = document.querySelector("#sortSelect");
const filters = document.querySelector("#categoryFilters");
const resultsCount = document.querySelector("#resultsCount");
const emptyState = document.querySelector("#emptyState");
const quickView = document.querySelector("#quickView");
const toast = document.querySelector("#toast");

let activeCategory = "all";
let toastTimer;

const money = value =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(value);

// Generate sneaker artwork without external image files.
function shoeGraphic(product) {
  return `
    <div class="shoe-illustration"
      style="
        --shoe-light:${product.light};
        --shoe-mid:${product.mid};
        --shoe-dark:${product.dark};
        --shoe-accent:${product.accent};
      ">
      <div class="sole"></div>
      <div class="upper"></div>
      <div class="heel"></div>
      <div class="accent"></div>
    </div>
  `;
}

// Create one product card.
function productCard(product, index) {
  return `
    <article class="product-card"
      style="animation-delay:${Math.min(index * 45, 360)}ms">

      <div class="product-visual" style="--glow:${product.glow}">
        <span class="product-number">
          SZ / ${String(product.id).padStart(2, "0")}
        </span>

        <span class="product-badge">${product.badge}</span>

        ${shoeGraphic(product)}
      </div>

      <div class="product-info">
        <div class="product-meta">
          <span>${product.brand}</span>
          <span>${product.type}</span>
        </div>

        <h3>${product.name}</h3>
        <p class="product-desc">${product.description}</p>

        <div class="product-bottom">
          <div class="product-price">
            ${money(product.price)}
            <small>Indicative price*</small>
          </div>

          <div class="card-actions">
            <button class="icon-button quick-button"
              data-quick="${product.id}"
              aria-label="Quick view ${product.name}"
              title="Quick view">↗</button>
          </div>
        </div>

        <a class="buy-button"
          href="${product.url}"
          target="_blank"
          rel="noopener noreferrer">
          View on ${product.retailer} <span>↗</span>
        </a>
      </div>
    </article>
  `;
}

// Apply search, category filters, and sorting.
function getVisibleProducts() {
  const query = searchInput.value.trim().toLowerCase();

  let visible = products.filter(product => {
    const matchesCategory =
      activeCategory === "all" ||
      product.category === activeCategory;

    const searchable = `
      ${product.name}
      ${product.brand}
      ${product.type}
      ${product.description}
      ${product.category}
    `.toLowerCase();

    return matchesCategory && searchable.includes(query);
  });

  switch (sortSelect.value) {
    case "price-low":
      visible.sort((a, b) => a.price - b.price);
      break;

    case "price-high":
      visible.sort((a, b) => b.price - a.price);
      break;

    case "name":
      visible.sort((a, b) => a.name.localeCompare(b.name));
      break;
  }

  return visible;
}

// Refresh the product grid.
function renderProducts() {
  const visible = getVisibleProducts();

  grid.innerHTML = visible
    .map((product, index) => productCard(product, index))
    .join("");

  resultsCount.textContent =
    `${visible.length} ${visible.length === 1 ? "pair" : "pairs"}`;

  emptyState.hidden = visible.length !== 0;
  grid.hidden = visible.length === 0;
}

// Open the product quick-view dialog.
function showQuickView(id) {
  const product = products.find(item => item.id === Number(id));

  if (!product) return;

  document.querySelector("#modalVisual").innerHTML =
    shoeGraphic(product);

  document.querySelector("#modalVisual")
    .style.setProperty("--glow", product.glow);

  document.querySelector("#modalCategory").textContent =
    `${product.brand} / ${product.type}`;

  document.querySelector("#modalTitle").textContent = product.name;

  document.querySelector("#modalDescription").textContent =
    product.description;

  document.querySelector("#modalPrice").textContent =
    `${money(product.price)}*`;

  const buy = document.querySelector("#modalBuy");

  buy.href = product.url;
  buy.innerHTML = `Shop ${product.retailer} <span>↗</span>`;

  if (typeof quickView.showModal === "function") {
    quickView.showModal();
    document.body.classList.add("modal-open");
  }
}

// Small toast notification.
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}

// Category filter buttons.
filters.addEventListener("click", event => {
  const button = event.target.closest("[data-category]");

  if (!button) return;

  activeCategory = button.dataset.category;

  filters.querySelectorAll(".filter-chip").forEach(chip => {
    const selected = chip === button;

    chip.classList.toggle("active", selected);
    chip.setAttribute("aria-pressed", String(selected));
  });

  renderProducts();
});

// Live search and sorting.
searchInput.addEventListener("input", renderProducts);
sortSelect.addEventListener("change", renderProducts);

// Quick-view button clicks.
grid.addEventListener("click", event => {
  const quickButton = event.target.closest("[data-quick]");

  if (quickButton) {
    showQuickView(quickButton.dataset.quick);
  }
});

// Reset all filters.
document.querySelector("#resetFilters").addEventListener("click", () => {
  searchInput.value = "";
  activeCategory = "all";
  sortSelect.value = "featured";

  filters.querySelectorAll(".filter-chip").forEach(chip => {
    const selected = chip.dataset.category === "all";

    chip.classList.toggle("active", selected);
    chip.setAttribute("aria-pressed", String(selected));
  });

  renderProducts();
  searchInput.focus();
});

// Close the quick-view window.
document.querySelector("#modalClose").addEventListener("click", () => {
  quickView.close();
});

quickView.addEventListener("close", () => {
  document.body.classList.remove("modal-open");
});

// Clicking the backdrop closes the dialog.
quickView.addEventListener("click", event => {
  if (event.target === quickView) {
    quickView.close();
  }
});

// Keyboard shortcut: Ctrl + K or Command + K.
document.addEventListener("keydown", event => {
  if (
    (event.metaKey || event.ctrlKey) &&
    event.key.toLowerCase() === "k"
  ) {
    event.preventDefault();
    searchInput.focus();
  }

  if (event.key === "Escape" && quickView.open) {
    quickView.close();
  }
});

// Responsive mobile navigation.
const menuToggle = document.querySelector("#menuToggle");
const navLinks = document.querySelector("#navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation" : "Open navigation"
  );
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
  });
});

// Reveal sections as they enter the viewport.
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach(element => {
    revealObserver.observe(element);
  });
} else {
  document.querySelectorAll(".reveal").forEach(element => {
    element.classList.add("visible");
  });
}

// Dynamic footer year.
document.querySelector("#year").textContent =
  new Date().getFullYear();

// Initial page render.
renderProducts();
showToast("ShoeZone is ready — find your next pair.");
