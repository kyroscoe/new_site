import { useState, FormEvent } from 'react';
import { Navigation } from '../home/components/Navigation';
import { Footer } from '../home/components/Footer';

export default function PaymentPortalPage() {
  const [formData, setFormData] = useState({
    invoiceNumber: '',
    amount: '',
    email: '',
    description: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setError('');

    try {
      const response = await fetch(
        `${import.meta.env.VITE_PUBLIC_SUPABASE_URL}/functions/v1/create-payment-session`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY}`,
          },
          body: JSON.stringify({
            amount: parseFloat(formData.amount),
            description: formData.description || `Invoice Payment`,
            customerEmail: formData.email,
            invoiceNumber: formData.invoiceNumber,
          }),
        }
      );

      const data = await response.json();

      if (data.error) {
        setError(data.error);
        setIsProcessing(false);
        return;
      }

      // Redirect to Stripe Checkout
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (err) {
      setError('Failed to process payment. Please try again.');
      setIsProcessing(false);
    }
  };

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-teal-50 px-4 py-2 rounded-full mb-4">
              <i className="ri-secure-payment-line text-teal-600"></i>
              <span className="text-teal-600 text-sm font-semibold">SECURE PAYMENT</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Payment Portal
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Pay your invoice securely with our encrypted payment system. All transactions are protected by Stripe.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl border border-gray-200 text-center">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-shield-check-line text-teal-600 text-2xl"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Secure & Encrypted</h3>
              <p className="text-sm text-gray-600">Bank-level security for all transactions</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 text-center">
              <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-bank-card-line text-cyan-600 text-2xl"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Multiple Payment Methods</h3>
              <p className="text-sm text-gray-600">Credit cards, debit cards, and more</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 text-center">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-file-text-line text-teal-600 text-2xl"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Instant Receipt</h3>
              <p className="text-sm text-gray-600">Email confirmation sent immediately</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border-2 border-gray-200 shadow-xl p-8 md:p-12">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="invoiceNumber" className="block text-sm font-semibold text-gray-900 mb-2">
                  Invoice Number *
                </label>
                <input
                  type="text"
                  id="invoiceNumber"
                  required
                  value={formData.invoiceNumber}
                  onChange={(e) => setFormData({ ...formData, invoiceNumber: e.target.value })}
                  className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                  placeholder="INV-2024-001"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="amount" className="block text-sm font-semibold text-gray-900 mb-2">
                  Payment Amount (USD) *
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-semibold">$</span>
                  <input
                    type="number"
                    id="amount"
                    required
                    min="0.01"
                    step="0.01"
                    value={formData.amount}
                    onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                    className="w-full pl-8 pr-4 py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                    placeholder="0.00"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                  placeholder="your@email.com"
                />
                <p className="text-xs text-gray-500 mt-1">Receipt will be sent to this email</p>
              </div>

              <div className="mb-8">
                <label htmlFor="description" className="block text-sm font-semibold text-gray-900 mb-2">
                  Payment Description (Optional)
                </label>
                <textarea
                  id="description"
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Additional notes about this payment..."
                />
              </div>

              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
                  <i className="ri-error-warning-line text-red-600 text-xl"></i>
                  <p className="text-red-800 text-sm">{error}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isProcessing}
                className="w-full bg-gradient-to-r from-teal-500 to-cyan-400 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer whitespace-nowrap flex items-center justify-center gap-2"
              >
                {isProcessing ? (
                  <>
                    <i className="ri-loader-4-line animate-spin"></i>
                    Processing...
                  </>
                ) : (
                  <>
                    <i className="ri-lock-line"></i>
                    Proceed to Secure Payment
                  </>
                )}
              </button>

              <div className="mt-6 flex items-center justify-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <i className="ri-shield-check-line text-teal-500"></i>
                  <span>SSL Encrypted</span>
                </div>
                <div className="flex items-center gap-1">
                  <i className="ri-shield-check-line text-teal-500"></i>
                  <span>PCI Compliant</span>
                </div>
              </div>
            </form>
          </div>

          <div className="mt-12 bg-gradient-to-r from-gray-900 to-teal-900 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-3">Need Help?</h3>
            <p className="text-gray-300 mb-6">
              If you have questions about your invoice or need assistance with payment, our team is here to help.
            </p>
            <button 
              onClick={() => document.querySelector('#vapi-widget-floating-button')?.dispatchEvent(new Event('click'))}
              className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all cursor-pointer whitespace-nowrap"
            >
              <i className="ri-customer-service-2-line"></i>
              Contact Support
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
