import { Link } from "react-router-dom";

function Cart({ cart, increaseQuantity, decreaseQuantity, removeFromCart }) {
  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <section className="min-h-screen bg-[#FAF9F6] px-4 py-12 sm:px-6 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#78836A]">
            Your Selection
          </p>

          <h2 className="text-3xl font-bold text-[#292B27]">Shopping Cart</h2>

          <p className="mt-2 text-sm text-[#77766F]">
            Review your stationery items before checkout.
          </p>
        </div>

        {cart.length === 0 ? (
          <div className="rounded-2xl bg-white px-5 py-16 text-center shadow-sm">
            <div className="mb-5 text-6xl">🛒</div>

            <h3 className="text-2xl font-bold text-[#292B27]">
              Your Cart is Empty
            </h3>

            <p className="mb-7 mt-3 text-[#77766F]">
              Looks like you haven't added anything to your cart yet.
            </p>

            <Link
              to="/"
              className="inline-block rounded-lg bg-[#68745B] px-7 py-3 font-semibold text-white transition hover:bg-[#536047]"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="grid items-start gap-8 lg:grid-cols-3">
            {/* Cart Items */}
            <div className="space-y-4 lg:col-span-2">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col gap-4 rounded-2xl border border-[#EAE7DF] bg-white p-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex min-w-0 items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-24 w-24 shrink-0 rounded-xl bg-[#F7F4ED] object-cover"
                    />

                    <div className="min-w-0">
                      <h3 className="font-semibold text-[#292B27]">
                        {item.name}
                      </h3>

                      <p className="mt-1 text-sm text-[#77766F]">
                        {item.category}
                      </p>

                      <p className="mt-2 font-semibold text-[#68745B]">
                        ₹{item.price}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-4 sm:justify-end">
                    {/* Quantity Controls */}
                    <div className="flex items-center overflow-hidden rounded-lg border border-[#EAE7DF]">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        aria-label={`Decrease quantity of ${item.name}`}
                        className="px-3 py-2 text-[#59634C] transition hover:bg-[#E7E9DF]"
                      >
                        −
                      </button>

                      <span className="min-w-10 text-center font-medium text-[#292B27]">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => increaseQuantity(item.id)}
                        aria-label={`Increase quantity of ${item.name}`}
                        className="px-3 py-2 text-[#59634C] transition hover:bg-[#E7E9DF]"
                      >
                        +
                      </button>
                    </div>

                    <div className="text-right">
                      <p className="font-bold text-[#292B27]">
                        ₹{item.price * item.quantity}
                      </p>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="mt-2 text-sm font-medium text-red-500 hover:text-red-700"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              <Link
                to="/"
                className="inline-block pt-2 text-sm font-semibold text-[#68745B] hover:underline"
              >
                ← Continue Shopping
              </Link>
            </div>

            {/* Order Summary */}
            <div className="rounded-2xl border border-[#EAE7DF] bg-white p-6 shadow-sm lg:sticky lg:top-28">
              <h3 className="mb-6 text-xl font-bold text-[#292B27]">
                Order Summary
              </h3>

              <div className="mb-4 flex justify-between text-sm text-[#77766F]">
                <span>Total Items</span>
                <span>{totalItems}</span>
              </div>

              <div className="mb-5 flex justify-between text-sm text-[#77766F]">
                <span>Subtotal</span>
                <span>₹{totalAmount}</span>
              </div>

              <div className="flex justify-between border-t border-[#EAE7DF] pt-5">
                <span className="font-bold text-[#292B27]">Total Amount</span>

                <span className="text-xl font-bold text-[#68745B]">
                  ₹{totalAmount}
                </span>
              </div>

              <Link
                to="/checkout"
                className="mt-7 block rounded-lg bg-[#68745B] px-6 py-3.5 text-center font-semibold text-white transition hover:bg-[#536047]"
              >
                Proceed to Checkout
              </Link>

              <p className="mt-4 text-center text-xs text-[#99968D]">
                Review your order details before placing your order.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Cart;
