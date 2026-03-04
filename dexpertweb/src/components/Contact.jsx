const Contact = () => {
  return (
    <section className="w-full min-h-screen bg-indigo-50 flex items-center justify-center py-10 px-4 font-sans">
      {/* Main Container - Size Chota kiya (max-w-4xl) */}
      <div className="w-full max-w-4xl bg-white rounded-[2rem] shadow-xl overflow-hidden grid md:grid-cols-2">
        
        {/* LEFT SIDE: Form Section */}
        <div className="p-6 md:p-10 flex flex-col justify-center">
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-1">Let's Partner Up!</h2>
            <p className="text-slate-500 text-sm">Together for a better solution.</p>
          </div>

          <form className="grid gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-500 mb-1">Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full border border-slate-200 bg-slate-50 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-500 mb-1">Email</label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full border border-slate-200 bg-slate-50 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-500 mb-1">Message</label>
              <textarea
                rows="4"
                placeholder="Your message..."
                className="w-full border border-slate-200 bg-slate-50 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition resize-none text-sm"
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-2 bg-indigo-600 hover:bg-orange-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300 text-sm"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* RIGHT SIDE: Inner Rectangle Container */}
        <div className="p-10 md:p-8 bg-slate-50 flex items-center justify-center border-l border-slate-100">
            
            {/* Inner Rectangle (Soft Background) */}
            <div className="w-full bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col justify-between min-h-[350px]">
                
                {/* TOP: Contact Details */}
                <div className="mb-6">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Contact Details</h3>
                    <div className="space-y-3 text-sm text-slate-600">
                        {/* Address */}
                        <div className="flex items-start gap-3">
                            <div className="bg-indigo-100 text-indigo-600 p-2 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            </div>
                            <div>
                                <p className="font-semibold text-slate-700 text-xs">Address</p>
                                <p className="text-xs">1 Lambton Place, Leeds, LS8 5PF, UK</p>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-start gap-3">
                            <div className="bg-orange-100 text-orange-600 p-2 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                            </div>
                            <div>
                                <p className="font-semibold text-slate-700 text-xs">Phone</p>
                                <p className="text-xs">+44 7723957343</p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-start gap-3">
                            <div className="bg-red-100 text-red-600 p-2 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                            </div>
                            <div>
                                <p className="font-semibold text-slate-700 text-xs">Email</p>
                                <p className="text-xs">info@dexperts.co.uk</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* BOTTOM: DeXperts Branding */}
                <div className="mt-auto text-center pt-4 border-t border-slate-100">
                    <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-br from-indigo-600 to-red-500 bg-clip-text text-transparent">
                        DeXperts
                    </h1>
                    <p className="text-xs text-slate-500 mt-1">Your Digital Solutions Partner</p>
                </div>

            </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;