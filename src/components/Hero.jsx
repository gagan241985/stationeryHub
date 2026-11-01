function Hero() {
  return (
    <section className="bg-[#F7F4ED] px-6 py-16 md:px-12 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
        {/* Hero Content */}
        <div>
          <span className="mb-5 inline-block rounded-full bg-[#E7E9DF] px-4 py-2 text-sm font-medium text-[#59634C]">
            Everything You Need to Create
          </span>

          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-[#292B27] md:text-5xl lg:text-6xl">
            Make Every Day
            <span className="block text-[#78836A]">More Creative.</span>
          </h1>

          <p className="mb-8 max-w-lg text-base leading-7 text-[#77766F] md:text-lg">
            Discover premium stationery, notebooks, writing tools and office
            essentials. Quality products for students, professionals and
            businesses.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#products"
              className="rounded-lg bg-[#68745B] px-7 py-3.5 font-semibold text-white transition hover:bg-[#536047]"
            >
              Shop Collection
            </a>

            <a
              href="#products"
              className="rounded-lg border border-[#68745B] px-7 py-3.5 font-semibold text-[#68745B] transition hover:bg-[#E7E9DF]"
            >
              Explore Products
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-8">
            <div>
              <h3 className="text-2xl font-bold text-[#292B27]">30+</h3>
              <p className="text-sm text-[#77766F]">Products</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#292B27]">Retail</h3>
              <p className="text-sm text-[#77766F]">Shopping</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#292B27]">Bulk</h3>
              <p className="text-sm text-[#77766F]">Orders</p>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=900&q=85"
            alt="Premium stationery and writing desk"
            className="h-[350px] w-full rounded-2xl object-cover shadow-xl md:h-[500px]"
          />

          <div className="absolute -bottom-5 -left-3 rounded-xl bg-white p-4 shadow-lg md:-left-6">
            <p className="text-sm font-semibold text-[#292B27]">
              Thoughtful Essentials
            </p>
            <p className="text-xs text-[#77766F]">
              For work, study and creativity
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
