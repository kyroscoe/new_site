export function Development() {
  const services = [
    {
      icon: 'ri-code-box-line',
      title: 'Web App Development',
      description: 'Full-stack web apps built with React, Next.js, and modern APIs.',
      technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'REST APIs', 'GraphQL'],
      image: 'https://readdy.ai/api/search-image?query=Modern%20web%20application%20development%20workspace%20showing%20multiple%20screens%20with%20React%20code%20and%20Next.js%20framework%2C%20professional%20developer%20desk%20with%20clean%20code%20editor%20displaying%20TypeScript%20and%20API%20integrations%2C%20minimalist%20tech%20environment%20with%20blue%20and%20teal%20accent%20lighting%2C%20high-quality%20monitors%20showing%20responsive%20web%20design%20layouts%2C%20professional%20software%20development%20studio%20atmosphere&width=800&height=600&seq=dev-web-001&orientation=landscape'
    },
    {
      icon: 'ri-smartphone-line',
      title: 'Mobile Development',
      description: 'Cross-platform apps using React Native and Flutter for iOS and Android.',
      technologies: ['React Native', 'Flutter', 'iOS', 'Android', 'Firebase', 'Push Notifications'],
      image: 'https://readdy.ai/api/search-image?query=Mobile%20app%20development%20workspace%20with%20smartphones%20displaying%20modern%20mobile%20applications%2C%20developer%20desk%20showing%20React%20Native%20and%20Flutter%20code%20on%20large%20monitors%2C%20iOS%20and%20Android%20devices%20arranged%20professionally%2C%20clean%20minimalist%20tech%20workspace%20with%20teal%20and%20blue%20lighting%2C%20professional%20mobile%20development%20studio%20with%20testing%20devices&width=800&height=600&seq=dev-mobile-001&orientation=landscape'
    },
    {
      icon: 'ri-links-line',
      title: 'Automation & Integration',
      description: 'Custom scripts, APIs, and dashboards to streamline your workflow.',
      technologies: ['Python', 'API Integration', 'Webhooks', 'Zapier', 'Custom Scripts', 'Dashboards'],
      image: 'https://readdy.ai/api/search-image?query=Automation%20and%20integration%20dashboard%20showing%20data%20flow%20diagrams%20and%20API%20connections%2C%20professional%20workspace%20with%20multiple%20monitors%20displaying%20custom%20scripts%20and%20workflow%20automation%2C%20modern%20tech%20environment%20with%20network%20visualization%20and%20data%20pipelines%2C%20clean%20minimalist%20office%20with%20teal%20accent%20lighting%2C%20professional%20software%20integration%20studio&width=800&height=600&seq=dev-auto-001&orientation=landscape'
    }
  ];

  return (
    <section id="development" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-cyan-50 px-4 py-2 rounded-full mb-4">
            <i className="ri-code-s-slash-line text-cyan-600"></i>
            <span className="text-cyan-600 text-sm font-semibold">DEVELOPMENT SERVICES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Custom Software Development
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your ideas into powerful applications with our expert development team using cutting-edge technologies.
          </p>
        </div>

        <div className="space-y-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              <div className="flex-1">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-96 object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
                </div>
              </div>

              <div className="flex-1">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-teal-400 rounded-xl flex items-center justify-center mb-6">
                  <i className={`${service.icon} text-2xl text-white`}></i>
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>

                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Technologies We Use:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="bg-gradient-to-r from-cyan-50 to-teal-50 text-cyan-700 px-4 py-2 rounded-lg text-sm font-medium border border-cyan-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={() => {
                    const element = document.getElementById('booking');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-gradient-to-r from-cyan-500 to-teal-400 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all cursor-pointer whitespace-nowrap inline-flex items-center gap-2"
                >
                  Start Your Project
                  <i className="ri-arrow-right-line"></i>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="text-center p-8">
            <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-time-line text-3xl text-cyan-600"></i>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Agile Development</h4>
            <p className="text-gray-600">Fast iterations and continuous delivery for rapid results</p>
          </div>
          <div className="text-center p-8">
            <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-shield-check-line text-3xl text-cyan-600"></i>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Quality Assurance</h4>
            <p className="text-gray-600">Rigorous testing ensures bug-free, reliable applications</p>
          </div>
          <div className="text-center p-8">
            <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-customer-service-line text-3xl text-cyan-600"></i>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Ongoing Support</h4>
            <p className="text-gray-600">Continuous maintenance and updates after launch</p>
          </div>
        </div>
      </div>
    </section>
  );
}
