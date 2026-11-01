import { Link } from "react-router-dom";

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-[#EAE7DF] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Link to={`/product/${product.id}`}>
        <div className="overflow-hidden bg-[#F7F4ED]">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      </Link>

      <div className="p-4">
        <span className="inline-block rounded-full bg-[#E7E9DF] px-3 py-1 text-xs font-medium text-[#59634C]">
          {product.category}
        </span>

        <Link to={`/product/${product.id}`}>
          <h2 className="mt-3 text-lg font-semibold text-[#292B27] hover:text-[#68745B]">
            {product.name}
          </h2>
        </Link>

        <div className="mt-2 flex items-center gap-1">
          <span className="text-amber-500">★</span>
          <span className="text-sm font-medium text-[#292B27]">
            {product.rating}
          </span>
          <span className="text-sm text-[#99968D]">/ 5</span>
        </div>

        <div className="mt-4 flex items-center justify-between gap-2">
          <p className="text-xl font-bold text-[#292B27]">₹{product.price}</p>

          <button
            onClick={() => onAddToCart(product)}
            className="rounded-lg bg-[#68745B] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#536047] active:scale-95"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
