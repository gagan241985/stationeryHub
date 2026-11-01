import products from "../data/stationery_products.json";
import ProductCard from "./ProductCard";

function ProductList({
  search,
  selectedCategory,
  setSelectedCategory,
  sortOrder,
  setSortOrder,
  onAddToCart,
}) {
  const categories = [
    "All",
    "Writing",
    "Notebooks",
    "Art Supplies",
    "Paper",
    "Office Supplies",
    "Adhesives",
    "Geometry",
    "Bags",
    "Filing",
  ];

  const filteredProducts = products.filter((product) => {
    const matchSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      selectedCategory === "All" || product.category === selectedCategory;

    return matchSearch && matchCategory;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === "lowToHigh") return a.price - b.price;
    if (sortOrder === "highToLow") return b.price - a.price;
    return 0;
  });

  return (
    <section id="products" className="bg-[#FAF9F6] px-4 py-14 sm:px-6 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#78836A]">
            Find Your Essentials
          </p>

          <h2 className="text-2xl font-bold text-[#292B27] sm:text-3xl md:text-4xl">
            Our Stationery Collection
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-6 text-[#77766F] sm:text-base">
            Explore thoughtfully selected stationery for studying, working and
            bringing your ideas to life.
          </p>
        </div>

        {/* Category Buttons */}
        <div className="mb-8 -mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
          <div className="flex w-max gap-2 pb-2 sm:flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`shrink-0 rounded-full px-4 py-2.5 text-sm font-medium transition ${
                  selectedCategory === category
                    ? "bg-[#68745B] text-white"
                    : "border border-[#EAE7DF] bg-white text-[#59634C] hover:bg-[#E7E9DF]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Product Count and Sorting */}
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-[#77766F]">
            Showing{" "}
            <span className="font-semibold text-[#292B27]">
              {sortedProducts.length}
            </span>{" "}
            products
          </p>

          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="w-full rounded-lg border border-[#EAE7DF] bg-white px-4 py-3 text-sm text-[#292B27] outline-none focus:border-[#68745B] sm:w-auto"
          >
            <option value="default">Default Sorting</option>
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
          </select>
        </div>

        {/* Product Grid */}
        {sortedProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
            {sortedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl bg-white px-4 py-16 text-center">
            <p className="text-lg font-semibold text-[#292B27]">
              No products found
            </p>
            <p className="mt-2 text-sm text-[#77766F]">
              Try another product name or category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default ProductList;
