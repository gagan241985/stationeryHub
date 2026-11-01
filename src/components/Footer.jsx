import { Link } from "react-router-dom";

function Footer() {
  const whatsappNumber = "919876543210"; // Replace with business number

  return (
    <footer className="bg-[#292B27] px-4 pb-6 pt-14 text-white sm:px-6 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link to="/" className="text-2xl font-bold">
              Stationery<span className="text-[#A7B395]">Hub.</span>
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-7 text-gray-400">
              Your destination for thoughtfully selected stationery, notebooks,
              writing tools and everyday office essentials.
            </p>

            <p className="mt-5 text-sm font-medium text-[#A7B395]">
              Write • Create • Inspire
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">Quick Links</h3>

            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link to="/" className="transition hover:text-white">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/#products" className="transition hover:text-white">
                  Shop Products
                </Link>
              </li>

              <li>
                <Link to="/cart" className="transition hover:text-white">
                  Shopping Cart
                </Link>
              </li>

              <li>
                <Link to="/contact" className="transition hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">Categories</h3>

            <ul className="space-y-3 text-sm text-gray-400">
              {[
                "Writing",
                "Notebooks",
                "Art Supplies",
                "Office Supplies",
                "Paper",
              ].map((category) => (
                <li key={category}>
                  <Link to="/" className="transition hover:text-white">
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">Get in Touch</h3>

            <div className="space-y-4 text-sm text-gray-400">
              <p>Email: contact@stationeryhub.com</p>

              <p>Phone: +91 98765 43210</p>

              <p>
                Monday – Saturday
                <br />
                10:00 AM – 7:00 PM
              </p>

              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  "Hello StationeryHub, I would like to enquire about your products.",
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-[#68745B] px-5 py-3 font-semibold text-white transition hover:bg-[#536047]"
              >
                Enquire on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col items-center justify-between gap-3 pt-6 text-center text-xs text-gray-500 sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} StationeryHub. All rights reserved.
          </p>

          <p>Designed with care for stationery lovers.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
