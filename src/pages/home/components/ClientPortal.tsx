
export function ClientPortal() {
  return (
    <section id="client-portal" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-cyan-50 px-4 py-2 rounded-full mb-4">
            <i className="ri-user-line text-cyan-600"></i>
            <span className="text-cyan-600 text-sm font-semibold">CLIENT PORTAL</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Manage Your Account
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access your billing information, make payments, and manage your services all in one convenient location.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-teal-300 hover:shadow-xl transition-all">
            <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-400 rounded-xl flex items-center justify-center mb-6">
              <i className="ri-bill-line text-3xl text-white"></i>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Billing Portal
            </h3>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              View your invoices, billing history, and download receipts from your account dashboard.
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-gray-700">
                <i className="ri-check-line text-teal-500 text-xl"></i>
                <span>View Invoices</span>
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <i className="ri-check-line text-teal-500 text-xl"></i>
                <span>Download Receipts</span>
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <i className="ri-check-line text-teal-500 text-xl"></i>
                <span>Billing History</span>
              </li>
            </ul>

            <a 
              href="https://billing.kyroscoe.com"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-cyan-400 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all whitespace-nowrap"
            >
              Access Portal
              <i className="ri-external-link-line"></i>
            </a>
          </div>

          <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-cyan-300 hover:shadow-xl transition-all">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-400 rounded-xl flex items-center justify-center mb-6">
              <i className="ri-secure-payment-line text-3xl text-white"></i>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Payment Portal
            </h3>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Pay your invoices securely online with our encrypted payment system powered by Stripe.
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-gray-700">
                <i className="ri-check-line text-cyan-500 text-xl"></i>
                <span>Secure Payments</span>
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <i className="ri-check-line text-cyan-500 text-xl"></i>
                <span>Instant Receipt</span>
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <i className="ri-check-line text-cyan-500 text-xl"></i>
                <span>Multiple Methods</span>
              </li>
            </ul>

            <a 
              href="/payment-portal"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-teal-400 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all whitespace-nowrap"
            >
              Make Payment
              <i className="ri-arrow-right-line"></i>
            </a>
          </div>

          <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-teal-300 hover:shadow-xl transition-all">
            <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-400 rounded-xl flex items-center justify-center mb-6">
              <i className="ri-dashboard-line text-3xl text-white"></i>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Service Dashboard
            </h3>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Monitor your IT services, track support tickets, and access important resources.
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-gray-700">
                <i className="ri-check-line text-teal-500 text-xl"></i>
                <span>Track Tickets</span>
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <i className="ri-check-line text-teal-500 text-xl"></i>
                <span>Service Status</span>
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <i className="ri-check-line text-teal-500 text-xl"></i>
                <span>Documentation</span>
              </li>
            </ul>

            <button 
              onClick={() => document.querySelector('#vapi-widget-floating-button')?.dispatchEvent(new Event('click'))}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-cyan-400 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all cursor-pointer whitespace-nowrap"
            >
              Contact Support
              <i className="ri-message-3-line"></i>
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-900 to-teal-900 rounded-2xl p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <i className="ri-lock-line text-5xl text-teal-400 mb-6"></i>
            <h3 className="text-3xl font-bold text-white mb-4">
              Secure & Confidential
            </h3>
            <p className="text-xl text-gray-300 mb-6">
              Your data is protected with enterprise-grade security. All transactions are encrypted and your information is never shared with third parties.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-gray-400">
              <div className="flex items-center gap-2">
                <i className="ri-shield-check-line text-teal-400"></i>
                <span>SSL Encrypted</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-shield-check-line text-teal-400"></i>
                <span>PCI Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-shield-check-line text-teal-400"></i>
                <span>GDPR Ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
