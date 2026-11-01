import { Link, useLocation } from "react-router-dom";

function Navbar({ search, setSearch, cartCount }) {
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path
      ? "font-semibold text-[#68745B]"
      : "text-[#59634C] hover:text-[#68745B]";

  return (
    <nav className="sticky top-0 z-50 border-b border-[#EAE7DF] bg-white/95 px-4 py-4 shadow-sm backdrop-blur sm:px-6 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="shrink-0">
          <h1 className="text-2xl font-bold tracking-tight text-[#292B27]">
            Stationery<span className="text-[#78836A]">Hub.</span>
          </h1>
          <p className="text-xs tracking-wide text-[#77766F]">
            Write • Create • Inspire
          </p>
        </Link>

        {/* Search */}
        {location.pathname === "/" && (
          <div className="order-3 w-full sm:order-none sm:max-w-xs sm:flex-1">
            <input
              type="text"
              placeholder="Search stationery..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg border border-[#EAE7DF] bg-[#FAF9F6] px-4 py-2.5 text-sm outline-none transition focus:border-[#68745B]"
            />
          </div>
        )}

        {/* Navigation */}
        <div className="flex items-center gap-3 text-sm sm:gap-5">
          <Link to="/" className={isActive("/")}>
            Home
          </Link>

          <Link to="/#products" className="text-[#59634C] hover:text-[#68745B]">
            Shop
          </Link>

          <Link to="/contact" className={isActive("/contact")}>
            Contact
          </Link>

          <Link
            to="/cart"
            className={`flex items-center gap-1.5 ${isActive("/cart")}`}
          >
            <span>Cart</span>
            <span className="rounded-full bg-[#68745B] px-2 py-1 text-xs font-semibold text-white">
              {cartCount}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
