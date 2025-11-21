import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Navigation } from '../home/components/Navigation';
import { Footer } from '../home/components/Footer';

export default function PaymentSuccessPage() {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          try {
            window.location.href = '/';
          } catch (error) {
            console.error('Redirect failed:', error);
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-50 flex items-center justify-center px-4 pt-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl border-2 border-teal-200 shadow-xl p-12">
            <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-check-line text-5xl text-white"></i>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Payment Successful!
            </h1>

            <p className="text-xl text-gray-600 mb-8">
              Thank you for your payment. Your transaction has been completed successfully.
            </p>

            <div className="bg-teal-50 border border-teal-200 rounded-lg p-6 mb-8">
              <div className="flex items-start gap-3 text-left">
                <i className="ri-information-line text-teal-600 text-xl mt-1"></i>
                <div>
                  <p className="text-gray-700 mb-2">
                    A confirmation email with your receipt has been sent to your email address.
                  </p>
                  {sessionId && (
                    <p className="text-sm text-gray-600">
                      Transaction ID: <span className="font-mono text-teal-600">{sessionId}</span>
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <a
                href="/"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-cyan-400 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all whitespace-nowrap"
              >
                <i className="ri-home-line"></i>
                Return to Homepage
              </a>

              <p className="text-sm text-gray-500">
                Redirecting automatically in {countdown} seconds...
              </p>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-mail-line text-teal-600 text-2xl"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Check Your Email</h3>
              <p className="text-sm text-gray-600">Receipt sent to your inbox</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-customer-service-2-line text-cyan-600 text-2xl"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Need Support?</h3>
              <button 
                onClick={() => document.querySelector('#vapi-widget-floating-button')?.dispatchEvent(new Event('click'))}
                className="text-sm text-cyan-600 hover:text-cyan-700 font-semibold cursor-pointer"
              >
                Contact Us
              </button>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-file-list-line text-teal-600 text-2xl"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">View Invoices</h3>
              <a 
                href="https://billing.kyroscoe.com"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="text-sm text-teal-600 hover:text-teal-700 font-semibold"
              >
                Billing Portal
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
