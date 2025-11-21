export function WebDesign() {
  const services = [
    {
      icon: 'ri-layout-line',
      title: 'Custom Development',
      description: 'From landing pages to eCommerce sites — built for speed and scalability.',
      features: [
        'Responsive Design',
        'SEO Optimized',
        'Fast Loading Times',
        'Mobile-First Approach',
        'eCommerce Integration',
        'CMS Solutions'
      ]
    },
    {
      icon: 'ri-palette-line',
      title: 'Design & Branding',
      description: 'Tailored UI/UX and brand-focused layouts using Tailwind and modern animations.',
      features: [
        'Custom UI/UX Design',
        'Brand Identity',
        'Interactive Animations',
        'Design Systems',
        'Prototyping',
        'User Research'
      ]
    },
    {
      icon: 'ri-cloud-line',
      title: 'Hosting & Deployment',
      description: 'Fast, secure hosting on Vercel, Netlify, or your preferred environment.',
      features: [
        'Cloud Hosting',
        'SSL Certificates',
        'CDN Integration',
        'Auto Scaling',
        'Backup Solutions',
        'Performance Monitoring'
      ]
    }
  ];

  const portfolio = [
    {
      title: 'Corporate Website',
      category: 'Business',
      image: 'https://readdy.ai/api/search-image?query=Modern%20corporate%20website%20design%20displayed%20on%20large%20desktop%20monitor%2C%20professional%20business%20website%20with%20clean%20layout%20and%20teal%20color%20scheme%2C%20elegant%20homepage%20with%20hero%20section%20and%20service%20cards%2C%20minimalist%20design%20with%20white%20background%20and%20professional%20typography%2C%20high-quality%20web%20design%20mockup%20in%20bright%20office%20environment&width=600&height=400&seq=web-corp-001&orientation=landscape'
    },
    {
      title: 'eCommerce Platform',
      category: 'Retail',
      image: 'https://readdy.ai/api/search-image?query=Modern%20eCommerce%20website%20design%20showing%20product%20grid%20and%20shopping%20cart%2C%20professional%20online%20store%20interface%20with%20clean%20product%20cards%20and%20checkout%20flow%2C%20minimalist%20retail%20website%20with%20teal%20accent%20colors%2C%20responsive%20web%20design%20displayed%20on%20multiple%20devices%2C%20bright%20studio%20photography%20with%20white%20background&width=600&height=400&seq=web-ecom-001&orientation=landscape'
    },
    {
      title: 'SaaS Dashboard',
      category: 'Technology',
      image: 'https://readdy.ai/api/search-image?query=Modern%20SaaS%20dashboard%20interface%20with%20data%20visualization%20and%20analytics%20charts%2C%20professional%20web%20application%20design%20with%20clean%20metrics%20and%20graphs%2C%20minimalist%20dashboard%20with%20teal%20and%20cyan%20color%20scheme%2C%20responsive%20admin%20panel%20displayed%20on%20large%20monitor%2C%20bright%20tech%20workspace%20with%20white%20background&width=600&height=400&seq=web-saas-001&orientation=landscape'
    }
  ];

  return (
    <section id="web-design" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-teal-50 px-4 py-2 rounded-full mb-4">
            <i className="ri-brush-line text-teal-600"></i>
            <span className="text-teal-600 text-sm font-semibold">WEB DESIGN SERVICES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Modern Web Design & Development
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Create stunning, high-performance websites that engage users and drive conversions with our expert design and development services.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:border-teal-300 hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-400 rounded-xl flex items-center justify-center mb-6">
                <i className={`${service.icon} text-2xl text-white`}></i>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                    <i className="ri-check-line text-teal-500"></i>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Recent Projects</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <div 
                key={index}
                className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer"
              >
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-teal-400 text-sm font-semibold">{project.category}</span>
                  <h4 className="text-xl font-bold text-white mt-1">{project.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-teal-900 rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Build Your Dream Website?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's create a stunning online presence that sets you apart from the competition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => {
                const element = document.getElementById('booking');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-teal-500 to-cyan-400 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-2xl transition-all cursor-pointer whitespace-nowrap"
            >
              Get Started
            </button>
            <button 
              onClick={() => document.querySelector('#vapi-widget-floating-button')?.dispatchEvent(new Event('click'))}
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg text-lg font-semibold border-2 border-white/20 hover:bg-white/20 transition-all cursor-pointer whitespace-nowrap"
            >
              Discuss Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
