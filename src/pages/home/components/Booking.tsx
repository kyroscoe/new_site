import { useState, FormEvent } from 'react';

export function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formBody = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        formBody.append(key, value);
      });

      const response = await fetch('https://readdy.ai/api/form/d4gabqramli27834g9h0', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString()
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          date: '',
          time: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    'Helpdesk & Remote Support',
    'Network & Infrastructure',
    'Cybersecurity & Compliance',
    'Computer Repair & Maintenance',
    'Managed IT Packages',
    'Web App Development',
    'Mobile Development',
    'Automation & Integration',
    'Custom Web Development',
    'Design & Branding',
    'Hosting & Deployment'
  ];

  return (
    <section id="booking" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-teal-50 px-4 py-2 rounded-full mb-4">
            <i className="ri-calendar-line text-teal-600"></i>
            <span className="text-teal-600 text-sm font-semibold">BOOK A CONSULTATION</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Schedule Your Free Consultation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Let's discuss your IT needs and find the perfect solution for your business. Book a time that works for you.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <form 
            id="booking-form"
            data-readdy-form
            onSubmit={handleSubmit}
            className="bg-gradient-to-br from-gray-50 to-white p-8 md:p-12 rounded-2xl border border-gray-200 shadow-xl"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                  placeholder="john@company.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                  placeholder="Your Company"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="service" className="block text-sm font-semibold text-gray-900 mb-2">
                Service Interested In *
              </label>
              <div className="relative">
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 pr-8 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all appearance-none cursor-pointer"
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
                <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="date" className="block text-sm font-semibold text-gray-900 mb-2">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all cursor-pointer"
                />
              </div>

              <div>
                <label htmlFor="time" className="block text-sm font-semibold text-gray-900 mb-2">
                  Preferred Time *
                </label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  required
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all cursor-pointer"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                Additional Information
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                maxLength={500}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all resize-none"
                placeholder="Tell us about your IT needs or any specific requirements..."
              />
              <div className="text-right text-xs text-gray-500 mt-1">
                {formData.message.length}/500 characters
              </div>
            </div>

            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                <i className="ri-check-line text-green-600 text-xl"></i>
                <p className="text-green-800 text-sm">
                  Thank you! Your consultation has been scheduled. We'll contact you shortly to confirm.
                </p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
                <i className="ri-error-warning-line text-red-600 text-xl"></i>
                <p className="text-red-800 text-sm">
                  Something went wrong. Please try again or contact us directly.
                </p>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-teal-500 to-cyan-400 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer whitespace-nowrap"
            >
              {isSubmitting ? 'Scheduling...' : 'Schedule Consultation'}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">Prefer to talk now?</p>
            <button 
              onClick={() => document.querySelector('#vapi-widget-floating-button')?.dispatchEvent(new Event('click'))}
              className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700 transition-colors cursor-pointer"
            >
              <i className="ri-chat-3-line text-xl"></i>
              Start a Live Chat
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
