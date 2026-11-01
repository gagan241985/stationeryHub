import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const whatsappNumber = "919811732145"; // Replace with business number

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `Hello, I would like to contact StationeryHub.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Message: ${formData.message}`;

    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappLink, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="min-h-screen bg-[#FAF9F6] px-4 py-14 sm:px-6 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#78836A]">
            We'd Love to Hear From You
          </p>

          <h1 className="text-3xl font-bold text-[#292B27] md:text-5xl">
            Contact Us
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-[#77766F]">
            Have a question, need a bulk quotation or want to know more about
            our products? Get in touch with us.
          </p>
        </div>

        <div className="grid gap-10 rounded-2xl bg-white p-6 shadow-sm md:grid-cols-2 md:p-10">
          <div>
            <h2 className="text-2xl font-bold text-[#292B27]">Get in Touch</h2>

            <p className="mt-4 leading-7 text-[#77766F]">
              We're happy to help with product enquiries, retail purchases and
              wholesale orders.
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <p className="font-semibold text-[#292B27]">Phone</p>
                <p className="mt-1 text-[#77766F]">+91 98765 43210</p>
              </div>

              <div>
                <p className="font-semibold text-[#292B27]">Email</p>
                <p className="mt-1 text-[#77766F]">contact@stationeryhub.com</p>
              </div>

              <div>
                <p className="font-semibold text-[#292B27]">Business Hours</p>
                <p className="mt-1 text-[#77766F]">
                  Monday – Saturday: 10 AM – 7 PM
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-[#292B27]">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-[#EAE7DF] px-4 py-3 outline-none focus:border-[#68745B]"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-[#292B27]">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-[#EAE7DF] px-4 py-3 outline-none focus:border-[#68745B]"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-[#292B27]">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-[#EAE7DF] px-4 py-3 outline-none focus:border-[#68745B]"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-[#292B27]">
                Your Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full rounded-lg border border-[#EAE7DF] px-4 py-3 outline-none focus:border-[#68745B]"
                placeholder="How can we help you?"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-[#68745B] px-6 py-4 font-semibold text-white transition hover:bg-[#536047]"
            >
              Send Enquiry on WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
