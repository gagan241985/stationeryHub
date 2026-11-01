import { useState } from "react";
import { Link } from "react-router-dom";

function Checkout({ cart }) {
  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    address: "",
  });

  // Replace this with the real business WhatsApp number.
  // Include country code, without + or spaces.
  const whatsappNumber = "919811732145";

  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const handleChange = (e) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value,
    });
  };

  const handleWhatsAppOrder = (e) => {
    e.preventDefault();

    const productDetails = cart
      .map(
        (item) =>
          `${item.name} - Qty: ${item.quantity} - ₹${item.price * item.quantity}`,
      )
      .join("\n");

    const message = `
Hello! I would like to place an order.

Customer Details:
Name: ${customer.name}
Phone: ${customer.phone}
Address: ${customer.address}

Order Details:
${productDetails}

Total Amount: ₹${totalAmount}

Please confirm product availability and delivery details.
`;

    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappLink, "_blank", "noopener,noreferrer");
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-[60vh] bg-[#FAF9F6] px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-[#292B27]">
          Your cart is empty
        </h2>
        <Link
          to="/"
          className="mt-6 inline-block rounded-lg bg-[#68745B] px-6 py-3 font-semibold text-white"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[#FAF9F6] px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-2 text-3xl font-bold text-[#292B27]">
          Place Your Order
        </h1>
        <p className="mb-10 text-[#77766F]">
          Enter your details and send your order directly through WhatsApp.
        </p>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Customer Details */}
          <form
            onSubmit={handleWhatsAppOrder}
            className="space-y-5 rounded-2xl bg-white p-6 shadow-sm lg:col-span-2"
          >
            <h2 className="text-xl font-semibold text-[#292B27]">
              Customer Details
            </h2>

            <div>
              <label className="mb-2 block text-sm font-medium text-[#292B27]">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={customer.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
                className="w-full rounded-lg border border-[#EAE7DF] px-4 py-3 outline-none focus:border-[#68745B]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-[#292B27]">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={customer.phone}
                onChange={handleChange}
                required
                pattern="[0-9]{10}"
                maxLength={10}
                placeholder="Enter 10-digit phone number"
                className="w-full rounded-lg border border-[#EAE7DF] px-4 py-3 outline-none focus:border-[#68745B]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-[#292B27]">
                Delivery Address
              </label>
              <textarea
                name="address"
                value={customer.address}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Enter your complete delivery address"
                className="w-full rounded-lg border border-[#EAE7DF] px-4 py-3 outline-none focus:border-[#68745B]"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-[#68745B] px-6 py-3.5 font-semibold text-white transition hover:bg-[#536047]"
            >
              Send Order on WhatsApp
            </button>

            <p className="text-xs text-[#77766F]">
              Your order is sent only after you review and send the prepared
              message in WhatsApp.
            </p>
          </form>

          {/* Order Summary */}
          <div className="h-fit rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="mb-5 text-xl font-semibold text-[#292B27]">
              Order Summary
            </h2>

            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between gap-3"
                >
                  <div>
                    <p className="font-medium text-[#292B27]">{item.name}</p>
                    <p className="text-sm text-[#77766F]">
                      Qty: {item.quantity}
                    </p>
                  </div>
                  <p className="font-semibold text-[#292B27]">
                    ₹{item.price * item.quantity}
                  </p>
                </div>
              ))}
            </div>

            <div className="my-5 border-t border-[#EAE7DF]" />

            <div className="flex justify-between text-lg font-bold text-[#292B27]">
              <span>Total</span>
              <span>₹{totalAmount}</span>
            </div>

            <Link
              to="/cart"
              className="mt-6 block text-center text-sm font-medium text-[#68745B] hover:underline"
            >
              Back to Cart
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Checkout;
