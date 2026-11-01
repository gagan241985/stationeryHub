import { Link } from "react-router-dom";

function OrderSuccess() {
  return (
    <section className="flex min-h-[75vh] items-center justify-center bg-[#FAF9F6] px-4 py-16">
      <div className="w-full max-w-xl rounded-2xl border border-[#EAE7DF] bg-white p-8 text-center shadow-sm sm:p-12">
        {/* Success Icon */}
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#E7E9DF]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-10 w-10 text-[#68745B]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 12.75 6 6 9-13.5"
            />
          </svg>
        </div>

        {/* Heading */}
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#78836A]">
          Thank You
        </p>

        <h1 className="text-3xl font-bold text-[#292B27] sm:text-4xl">
          Order Placed Successfully!
        </h1>

        {/* Description */}
        <p className="mx-auto mt-5 max-w-md leading-7 text-[#77766F]">
          Thank you for shopping with StationeryHub. Your order details have
          been submitted successfully.
        </p>

        {/* Additional Message */}
        <div className="mt-8 rounded-xl bg-[#F7F4ED] p-5">
          <p className="font-semibold text-[#292B27]">Happy Shopping!</p>

          <p className="mt-2 text-sm leading-6 text-[#77766F]">
            We hope our stationery essentials make your everyday work, study and
            creativity more enjoyable.
          </p>
        </div>

        {/* Continue Shopping */}
        <Link
          to="/"
          className="mt-8 inline-block w-full rounded-lg bg-[#68745B] px-7 py-4 font-semibold text-white transition hover:bg-[#536047] sm:w-auto"
        >
          Continue Shopping
        </Link>
      </div>
    </section>
  );
}

export default OrderSuccess;
