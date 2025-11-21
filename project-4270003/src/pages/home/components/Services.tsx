export function Services() {
  const services = [
    {
      icon: 'ri-customer-service-2-line',
      title: 'Helpdesk & Remote Support',
      description: 'Fast, ticket-based remote assistance for everyday issues — from printer errors to software bugs.',
      features: ['24/7 Remote Support', 'Ticket Management', 'Quick Response Time', 'Issue Resolution']
    },
    {
      icon: 'ri-server-line',
      title: 'Network & Infrastructure',
      description: 'Cloud migrations, VPN setup, and secure Wi-Fi and network design for small to mid-size businesses.',
      features: ['Cloud Migration', 'VPN Configuration', 'Network Security', 'Infrastructure Design']
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Cybersecurity & Compliance',
      description: 'Endpoint protection, vulnerability scans, and employee security training to keep your data safe.',
      features: ['Threat Protection', 'Security Audits', 'Compliance Training', 'Data Encryption']
    },
    {
      icon: 'ri-tools-line',
      title: 'Computer Repair & Maintenance',
      description: 'Hardware diagnostics, OS installs, malware cleanup, and PC optimization — local or remote.',
      features: ['Hardware Diagnostics', 'OS Installation', 'Malware Removal', 'Performance Tuning']
    },
    {
      icon: 'ri-settings-3-line',
      title: 'Managed IT Packages',
      description: 'Full-service IT care with monthly maintenance, backups, patching, and monitoring.',
      features: ['Proactive Monitoring', 'Regular Backups', 'System Updates', 'Monthly Reports']
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-teal-50 px-4 py-2 rounded-full mb-4">
            <i className="ri-service-line text-teal-600"></i>
            <span className="text-teal-600 text-sm font-semibold">IT SUPPORT SERVICES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive IT Support Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional IT support services designed to keep your business running smoothly with minimal downtime and maximum efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:border-teal-300 hover:shadow-xl transition-all group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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

        <div className="mt-16 bg-gradient-to-r from-teal-500 to-cyan-400 rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Need Immediate IT Support?
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Our expert team is available 24/7 to resolve your IT issues quickly and efficiently.
          </p>
          <button 
            onClick={() => document.querySelector('#vapi-widget-floating-button')?.dispatchEvent(new Event('click'))}
            className="bg-white text-teal-600 px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-2xl transition-all cursor-pointer whitespace-nowrap"
          >
            Chat With Support Now
          </button>
        </div>
      </div>
    </section>
  );
}
