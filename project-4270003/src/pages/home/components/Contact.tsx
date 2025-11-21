import { useState, FormEvent } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
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

      const response = await fetch('https://readdy.ai/api/form/d4gabqramli27834g9gg', {
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
          subject: '',
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

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-cyan-50 px-4 py-2 rounded-full mb-4">
            <i className="ri-mail-line text-cyan-600"></i>
            <span className="text-cyan-600 text-sm font-semibold">GET IN TOUCH</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions? We're here to help. Reach out to our team and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <form 
              id="contact-form"
              data-readdy-form
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg"
            >
              <div className="mb-6">
                <label htmlFor="contact-name" className="block text-sm font-semibold text-gray-900 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="contact-email" className="block text-sm font-semibold text-gray-900 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                  placeholder="john@company.com"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="contact-phone" className="block text-sm font-semibold text-gray-900 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="contact-phone"
                  name="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                  placeholder="+1 (937) 631-1521"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="contact-subject" className="block text-sm font-semibold text-gray-900 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                  placeholder="How can we help you?"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="contact-message" className="block text-sm font-semibold text-gray-900 mb-2">
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  maxLength={500}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
                <div className="text-right text-xs text-gray-500 mt-1">
                  {formData.message.length}/500 characters
                </div>
              </div>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                  <i className="ri-check-line text-green-600 text-xl"></i>
                  <p className="text-green-800 text-sm">
                    Thank you for contacting us! We'll get back to you within 24 hours.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
                  <i className="ri-error-warning-line text-red-600 text-xl"></i>
                  <p className="text-red-800 text-sm">
                    Something went wrong. Please try again or call us directly.
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-500 to-teal-400 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer whitespace-nowrap"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-teal-400 rounded-xl flex items-center justify-center mb-4">
                <i className="ri-phone-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 mb-3">Available 24/7 for emergency support</p>
              <a href="tel:+15551234567" className="text-cyan-600 font-semibold hover:text-cyan-700 transition-colors">
                +1 (555) 123-4567
              </a>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-teal-400 rounded-xl flex items-center justify-center mb-4">
                <i className="ri-mail-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-3">We'll respond within 24 hours</p>
              <a href="mailto:support@kyroscoe.com" className="text-cyan-600 font-semibold hover:text-cyan-700 transition-colors">
                support@kyroscoe.com
              </a>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-teal-400 rounded-xl flex items-center justify-center mb-4">
                <i className="ri-chat-3-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Live Chat</h3>
              <p className="text-gray-600 mb-4">Get instant answers to your questions</p>
              <button 
                onClick={() => document.querySelector('#vapi-widget-floating-button')?.dispatchEvent(new Event('click'))}
                className="text-cyan-600 font-semibold hover:text-cyan-700 transition-colors cursor-pointer inline-flex items-center gap-2"
              >
                Start Chat
                <i className="ri-arrow-right-line"></i>
              </button>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-teal-900 p-8 rounded-2xl text-white">
              <h3 className="text-xl font-bold mb-3">Business Hours</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="font-semibold">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday & Sunday:</span>
                  <span className="font-semibold">Closed</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/20">
                <p className="text-sm text-teal-300">
                  <strong>Emergency Support:</strong> Available 24/7
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
