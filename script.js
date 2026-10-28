
const products = [
  {
    name: "Campus OG-29",
    brand: "Campus",
    category: "Everyday",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=85",
    amazon: "https://www.amazon.in/s?k=Campus+OG-29+sneakers",
    flipkart: "https://www.flipkart.com/campus-og-29-sneakers-men/p/itm45d46d41feb92"
  },
  {
    name: "PUMA Zod Runner V3 IDP",
    brand: "PUMA",
    category: "Running",
    image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=700&q=85",
    amazon: "https://www.amazon.in/s?k=PUMA+Zod+Runner+V3+IDP",
    flipkart: "https://www.flipkart.com/puma-zod-runner-v3-idp-running-shoes-men/p/itm92e03d2d421fa"
  },
  {
    name: "PUMA Rickie Classic",
    brand: "PUMA",
    category: "Sneakers",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=85",
    amazon: "https://www.amazon.in/s?k=PUMA+Rickie+Classic+sneakers",
    flipkart: "https://www.flipkart.com/mens-footwear/pr?q=PUMA+Rickie+Classic+Sneakers+For+Men&sid=osp%2Ccil%2Ce1f"
  },
  {
    name: "Red Tape Lifestyle Sneakers",
    brand: "Red Tape",
    category: "Casual",
    image: "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=700&q=85",
    amazon: "https://www.amazon.in/s?k=Red+Tape+lifestyle+sneakers+men",
    flipkart: "https://www.flipkart.com/mens-footwear/pr?q=Red+Tape+lifestyle+sneakers+men&sid=osp%2Ccil%2Ce1f"
  },
  {
    name: "Sparx Casual Sneakers",
    brand: "Sparx",
    category: "Casual",
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=700&q=85",
    amazon: "https://www.amazon.in/s?k=Sparx+casual+sneakers+men",
    flipkart: "https://www.flipkart.com/mens-footwear/pr?q=Sparx+casual+sneakers+men&sid=osp%2Ccil%2Ce1f"
  },
  {
    name: "Campus Camp Clint",
    brand: "Campus",
    category: "Sneakers",
    image: "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=700&q=85",
    amazon: "https://www.amazon.in/s?k=Campus+Camp+Clint+sneakers",
    flipkart: "https://www.flipkart.com/mens-footwear/pr?q=Campus+Camp+Clint+sneakers&sid=osp%2Ccil%2Ce1f"
  },
  {
    name: "Asian Casual Sneakers",
    brand: "Asian",
    category: "Everyday",
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=700&q=85",
    amazon: "https://www.amazon.in/s?k=Asian+casual+sneakers+men",
    flipkart: "https://www.flipkart.com/mens-footwear/pr?q=Asian+casual+sneakers+men&sid=osp%2Ccil%2Ce1f"
  },
  {
    name: "Skechers Summits",
    brand: "Skechers",
    category: "Everyday",
    image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=700&q=85",
    amazon: "https://www.amazon.in/s?k=Skechers+Summits+men",
    flipkart: "https://www.flipkart.com/mens-footwear/pr?q=Skechers+Summits+sneakers+men&sid=osp%2Ccil%2Ce1f"
  },
  {
    name: "PUMA Smashic",
    brand: "PUMA",
    category: "Sneakers",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=85",
    amazon: "https://www.amazon.in/s?k=PUMA+Smashic+sneakers",
    flipkart: "https://www.flipkart.com/mens-footwear/pr?q=PUMA+Smashic+sneakers+men&sid=osp%2Ccil%2Ce1f"
  },
  {
    name: "BOLDFIT Klassics",
    brand: "BOLDFIT",
    category: "Casual",
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=700&q=85",
    amazon: "https://www.amazon.in/s?k=BOLDFIT+Klassics+sneakers",
    flipkart: "https://www.flipkart.com/mens-footwear/pr?q=BOLDFIT+Klassics+sneakers&sid=osp%2Ccil%2Ce1f"
  },
  {
    name: "Woodland Casual Lace-Ups",
    brand: "Woodland",
    category: "Casual",
    image: "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=700&q=85",
    amazon: "https://www.amazon.in/s?k=Woodland+casual+shoes+men",
    flipkart: "https://www.flipkart.com/mens-footwear/pr?q=Woodland+casual+lace+up+shoes+men&sid=osp%2Ccil%2Ce1f"
  },
  {
    name: "Echor Casual Sneakers",
    brand: "Echor",
    category: "Everyday",
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=700&q=85",
    amazon: "https://www.amazon.in/s?k=Echor+casual+sneakers+men",
    flipkart: "https://www.flipkart.com/mens-footwear/pr?q=Echor+casual+sneakers+men&sid=osp%2Ccil%2Ce1f"
  }
];

const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const productCount = document.getElementById("productCount");
const noResults = document.getElementById("noResults");

// Build each product card from the product data above.
function createProductCard(product) {
  const card = document.createElement("article");
  card.className = "product-card";

  const visual = document.createElement("div");
  visual.className = "product-visual";

  const image = document.createElement("img");
  image.src = product.image;
  image.alt = "Illustrative shoe image for " + product.name;
  image.loading = "lazy";

  // Show a fallback if an image URL fails.
  image.addEventListener("error", () => {
    visual.innerHTML = '<span aria-label="Shoe illustration" role="img" style="font-size:5rem">👟</span>';
  }, { once: true });

  visual.appendChild(image);

  const info = document.createElement("div");
  info.className = "product-info";

  const brand = document.createElement("p");
  brand.className = "product-brand";
  brand.textContent = product.brand;

  const title = document.createElement("h3");
  title.textContent = product.name;

  const category = document.createElement("p");
  category.className = "product-category";
  category.textContent = product.category + " footwear";

  const actions = document.createElement("div");
  actions.className = "retailer-actions";

  const amazonLink = document.createElement("a");
  amazonLink.className = "retailer-link primary";
  amazonLink.href = product.amazon;
  amazonLink.target = "_blank";
  amazonLink.rel = "noopener noreferrer";
  amazonLink.textContent = "View on Amazon";

  const flipkartLink = document.createElement("a");
  flipkartLink.className = "retailer-link secondary";
  flipkartLink.href = product.flipkart;
  flipkartLink.target = "_blank";
  flipkartLink.rel = "noopener noreferrer";
  flipkartLink.textContent = "View on Flipkart";

  actions.append(amazonLink, flipkartLink);
  info.append(brand, title, category, actions);
  card.append(visual, info);

  return card;
}

// Filter products by the search text and selected category.
function renderProducts() {
  const searchTerm = searchInput.value.trim().toLowerCase();
  const selectedCategory = categoryFilter.value;

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm) ||
      product.brand.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm);

    const matchesCategory =
      selectedCategory === "all" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  productGrid.replaceChildren();

  filteredProducts.forEach((product) => {
    productGrid.appendChild(createProductCard(product));
  });

  productCount.textContent =
    filteredProducts.length + (filteredProducts.length === 1 ? " product" : " products");

  noResults.hidden = filteredProducts.length !== 0;
}

searchInput.addEventListener("input", renderProducts);
categoryFilter.addEventListener("change", renderProducts);

document.getElementById("currentYear").textContent = new Date().getFullYear();

renderProducts();
