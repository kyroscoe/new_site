export function Hero() {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-teal-900 to-cyan-900">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://static.readdy.ai/image/1fb9edda2a78ca9da3f6ff5e8fa66d51/a0d3cd3ab8f1a1fd77089dba12da46dd.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-teal-900/90 to-transparent z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="order-2 md:order-1">
            <img 
              src="https://static.readdy.ai/image/1fb9edda2a78ca9da3f6ff5e8fa66d51/a0d3cd3ab8f1a1fd77089dba12da46dd.png"
              alt="Kyroscoe IT Solutions"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>

          {/* Right side - Content */}
          <div className="order-1 md:order-2">
            <div className="inline-flex items-center gap-2 bg-teal-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-teal-400/30">
              <i className="ri-shield-check-line text-teal-400"></i>
              <span className="text-teal-300 text-sm font-medium">Trusted IT Solutions</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Your Complete <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300">IT Partner</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              From full-service IT support to software development and modern web design — we deliver comprehensive technology solutions that drive your business forward.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={scrollToBooking}
                className="bg-gradient-to-r from-teal-500 to-cyan-400 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-2xl hover:shadow-teal-500/50 transition-all cursor-pointer whitespace-nowrap"
              >
                Schedule Consultation
              </button>
              <button 
                onClick={scrollToServices}
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg text-lg font-semibold border-2 border-white/20 hover:bg-white/20 transition-all cursor-pointer whitespace-nowrap"
              >
                Explore Services
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
              <div>
                <div className="text-3xl font-bold text-teal-400 mb-1">500+</div>
                <div className="text-gray-400 text-sm">Clients Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-400 mb-1">24/7</div>
                <div className="text-gray-400 text-sm">Support Available</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-400 mb-1">99.9%</div>
                <div className="text-gray-400 text-sm">Uptime SLA</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <button 
          onClick={scrollToServices}
          className="animate-bounce w-12 h-12 flex items-center justify-center cursor-pointer"
        >
          <i className="ri-arrow-down-line text-3xl text-white/60"></i>
        </button>
      </div>
    </section>
  );
}
