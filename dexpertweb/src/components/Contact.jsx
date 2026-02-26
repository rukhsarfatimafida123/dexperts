const Contact = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-indigo-800">
          Contact Us
        </h2>

        <form className="max-w-3xl mx-auto mt-14 grid gap-6">

          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="border border-gray-300 p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          ></textarea>

          <button
            type="submit"
            className="bg-red-600 text-white py-3 rounded-md font-medium hover:bg-orange-600 transition"
          >
            Send
          </button>

        </form>
      </div>
    </section>
  )
}

export default Contact
