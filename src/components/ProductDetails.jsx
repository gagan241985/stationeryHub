import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import products from "../data/stationery_products.json";

function ProductDetails({ onAddToCart }) {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="px-6 py-20 text-center">
        <h2 className="text-2xl font-bold text-[#292B27]">Product not found</h2>
        <Link to="/" className="mt-4 inline-block text-[#68745B] underline">
          Back to Shop
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      onAddToCart(product);
    }
  };
  const whatsappNumber = "919811732145"; // Replace with business WhatsApp number

  const whatsappMessage = `Hello, I am interested in ${product.name}.
Price: ₹${product.price}
Quantity: ${quantity}`;

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="min-h-screen bg-[#FAF9F6] px-4 py-12 sm:px-6 md:px-10">
      <div className="mx-auto max-w-6xl">
        <Link
          to="/"
          className="mb-8 inline-block text-sm text-[#68745B] hover:underline"
        >
          ← Back to Shop
        </Link>

        <div className="grid gap-10 rounded-2xl bg-white p-5 shadow-sm md:grid-cols-2 md:p-10">
          <div className="overflow-hidden rounded-xl bg-[#F7F4ED]">
            <img
              src={product.image}
              alt={product.name}
              className="h-full max-h-[500px] min-h-[300px] w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <span className="w-fit rounded-full bg-[#E7E9DF] px-4 py-2 text-sm font-medium text-[#59634C]">
              {product.category}
            </span>

            <h1 className="mt-5 text-3xl font-bold text-[#292B27] md:text-4xl">
              {product.name}
            </h1>

            <div className="mt-4 flex items-center gap-2">
              <span className="text-xl text-amber-500">★</span>
              <span className="font-semibold text-[#292B27]">
                {product.rating}
              </span>
              <span className="text-sm text-[#99968D]">/ 5</span>
            </div>

            <p className="mt-6 text-3xl font-bold text-[#292B27]">
              ₹{product.price}
            </p>

            <p className="mt-5 leading-7 text-[#77766F]">
              A thoughtfully selected stationery essential for your everyday
              writing, studying and creative needs.
            </p>

            <div className="mt-8">
              <p className="mb-3 text-sm font-semibold text-[#292B27]">
                Quantity
              </p>

              <div className="flex w-fit items-center overflow-hidden rounded-lg border border-[#EAE7DF]">
                <button
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                  className="px-4 py-2 text-lg hover:bg-[#F7F4ED]"
                >
                  −
                </button>

                <span className="min-w-12 text-center">{quantity}</span>

                <button
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="px-4 py-2 text-lg hover:bg-[#F7F4ED]"
                >
                  +
                </button>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="mt-8 w-full rounded-lg bg-[#68745B] px-6 py-4 font-semibold text-white transition hover:bg-[#536047] sm:w-auto"
            >
              Add to Cart
            </button>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] px-6 py-4 font-semibold text-white transition hover:bg-[#1DA851] sm:w-auto"
            >
              <span>Enquire on WhatsApp</span>
            </a>
            <p className="mt-5 text-sm text-[#99968D]">
              Suitable for individual purchases and bulk enquiries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
