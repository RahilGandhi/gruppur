import React from 'react';
import './customcss.css';

// Icons
const ChartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="20" x2="12" y2="10"></line>
    <line x1="18" y1="20" x2="18" y2="4"></line>
    <line x1="6" y1="20" x2="6" y2="16"></line>
  </svg>
);

const LockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
  </svg>
);

const AlertIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3Z"></path>
    <path d="M9 17v1a3 3 0 0 0 6 0v-1"></path>
  </svg>
);

const ReportIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h9"></path>
    <polyline points="9 10 13 14 21 6"></polyline>
  </svg>
);

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
    <path d="m9 12 2 2 4-4"></path>
  </svg>
);

const SinglePageLanding = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-100 py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-finance-600">WealthHub</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-finance-600">Features</a>
            <a href="#testimonials" className="text-gray-600 hover:text-finance-600">Testimonials</a>
            <a href="#pricing" className="text-gray-600 hover:text-finance-600">Pricing</a>
            <a href="#faq" className="text-gray-600 hover:text-finance-600">FAQ</a>
          </div>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 text-finance-600 hover:text-finance-700">Login</button>
            <button className="px-4 py-2 bg-finance-600 text-white rounded-md hover:bg-finance-700 transition-colors">Sign Up</button>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-finance-50 to-white relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-12 md:mb-0">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 text-left">
                  All your investments. <br />
                  <span className="text-finance-600">One powerful dashboard.</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-lg text-left">
                  Track, analyze, and optimize your entire investment portfolio with the most comprehensive finance hub available.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="px-6 py-3 bg-finance-600 text-white rounded-md hover:bg-finance-700 transition-colors text-lg">
                    Start free trial
                  </button>
                  <button className="px-6 py-3 border border-finance-600 text-finance-600 rounded-md hover:bg-finance-50 transition-colors text-lg">
                    Watch demo
                  </button>
                </div>
                <div className="mt-8 text-gray-500 flex items-center gap-2">
                  <CheckIcon />
                  <span>No credit card required</span>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="bg-white rounded-lg shadow-xl p-4 md:p-8 transform md:rotate-2 md:hover:rotate-0 transition-transform duration-500">
                  <img 
                    src="https://placehold.co/600x400/1e88e5/FFFFFF/png?text=Financial+Dashboard" 
                    alt="WealthHub Dashboard" 
                    className="rounded-lg w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Section */}
        <section id="features" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need to manage your finances</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                WealthHub provides powerful tools to track investments, analyze performance, and make informed decisions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Feature 1 */}
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-finance-100 rounded-lg flex items-center justify-center text-finance-600 mb-4">
                  <ChartIcon />
                </div>
                <h3 className="text-xl font-semibold mb-3">Investment Tracking</h3>
                <p className="text-gray-600">
                  Track stocks, mutual funds, bonds, crypto and more in one unified dashboard.
                </p>
              </div>
              
              {/* Feature 2 */}
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-finance-100 rounded-lg flex items-center justify-center text-finance-600 mb-4">
                  <ReportIcon />
                </div>
                <h3 className="text-xl font-semibold mb-3">Performance Analytics</h3>
                <p className="text-gray-600">
                  Advanced analytics to understand your portfolio performance and asset allocation.
                </p>
              </div>
              
              {/* Feature 3 */}
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-finance-100 rounded-lg flex items-center justify-center text-finance-600 mb-4">
                  <AlertIcon />
                </div>
                <h3 className="text-xl font-semibold mb-3">Smart Alerts</h3>
                <p className="text-gray-600">
                  Get notified about important market events and portfolio changes.
                </p>
              </div>
              
              {/* Feature 4 */}
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-finance-100 rounded-lg flex items-center justify-center text-finance-600 mb-4">
                  <LockIcon />
                </div>
                <h3 className="text-xl font-semibold mb-3">Bank-Level Security</h3>
                <p className="text-gray-600">
                  Your financial data is protected with enterprise-grade encryption.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-finance-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Loved by investors worldwide</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join thousands of users who trust WealthHub for their investment tracking.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-finance-200 rounded-full flex items-center justify-center text-finance-600 font-bold">
                    JS
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold">Jane Smith</h4>
                    <p className="text-gray-500 text-sm">Retail Investor</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "WealthHub transformed how I manage my investments. I can finally see all my assets in one place with insightful analytics."
                </p>
              </div>
              
              {/* Testimonial 2 */}
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-finance-200 rounded-full flex items-center justify-center text-finance-600 font-bold">
                    MB
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold">Mark Brown</h4>
                    <p className="text-gray-500 text-sm">Financial Advisor</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "I recommend WealthHub to all my clients. The comprehensive reports and insights are invaluable for portfolio management."
                </p>
              </div>
              
              {/* Testimonial 3 */}
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-finance-200 rounded-full flex items-center justify-center text-finance-600 font-bold">
                    AK
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold">Alice King</h4>
                    <p className="text-gray-500 text-sm">Crypto Enthusiast</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Finally a platform that handles traditional investments and crypto equally well. The unified dashboard saves me hours each week!"
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, transparent pricing</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the plan that fits your investment journey. All plans include our core tracking features.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Basic Plan */}
              <div className="border rounded-xl p-8 bg-white hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-2">Starter</h3>
                <p className="text-gray-600 mb-4">Perfect for new investors</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$9</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckIcon /> 
                    <span className="ml-2">Up to 10 investments</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon /> 
                    <span className="ml-2">Basic analytics</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon /> 
                    <span className="ml-2">Daily updates</span>
                  </li>
                </ul>
                <button className="w-full py-3 border border-finance-600 text-finance-600 rounded-md hover:bg-finance-50 transition-colors">
                  Get started
                </button>
              </div>
              
              {/* Pro Plan - Highlighted */}
              <div className="border-2 border-finance-600 rounded-xl p-8 bg-white shadow-md relative">
                <div className="absolute top-0 right-0 bg-finance-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                  POPULAR
                </div>
                <h3 className="text-xl font-bold mb-2">Professional</h3>
                <p className="text-gray-600 mb-4">For serious investors</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$29</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckIcon /> 
                    <span className="ml-2">Unlimited investments</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon /> 
                    <span className="ml-2">Advanced analytics</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon /> 
                    <span className="ml-2">Real-time updates</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon /> 
                    <span className="ml-2">Portfolio optimization</span>
                  </li>
                </ul>
                <button className="w-full py-3 bg-finance-600 text-white rounded-md hover:bg-finance-700 transition-colors">
                  Get started
                </button>
              </div>
              
              {/* Enterprise Plan */}
              <div className="border rounded-xl p-8 bg-white hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-2">Enterprise</h3>
                <p className="text-gray-600 mb-4">For teams and advisors</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$99</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckIcon /> 
                    <span className="ml-2">Everything in Professional</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon /> 
                    <span className="ml-2">Multi-user access</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon /> 
                    <span className="ml-2">Client management</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon /> 
                    <span className="ml-2">API access</span>
                  </li>
                </ul>
                <button className="w-full py-3 border border-finance-600 text-finance-600 rounded-md hover:bg-finance-50 transition-colors">
                  Contact sales
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-finance-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently asked questions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to know about WealthHub's features and pricing.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className="mb-6">
                <div className="border-b pb-4">
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Can I connect my brokerage accounts?</h3>
                  <p className="text-gray-600">
                    Yes, WealthHub connects securely with over 10,000 financial institutions globally, allowing automatic syncing of your investment accounts.
                  </p>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="border-b pb-4">
                  <h3 className="text-xl font-medium text-gray-900 mb-2">How secure is my financial data?</h3>
                  <p className="text-gray-600">
                    WealthHub uses bank-level 256-bit encryption for all data and never stores your account passwords. We also support two-factor authentication for added security.
                  </p>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="border-b pb-4">
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Can I track cryptocurrency investments?</h3>
                  <p className="text-gray-600">
                    Absolutely! WealthHub supports tracking of all major cryptocurrencies and most altcoins, with real-time market data and portfolio analytics.
                  </p>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="border-b pb-4">
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Is there a mobile app available?</h3>
                  <p className="text-gray-600">
                    Yes, WealthHub offers native mobile apps for iOS and Android, allowing you to track your investments on the go.
                  </p>
                </div>
              </div>
              
              <div>
                <div className="pb-4">
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Can I cancel my subscription?</h3>
                  <p className="text-gray-600">
                    You can cancel your subscription at any time through your account settings. We don't lock you into long-term contracts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-finance-600 to-finance-800 relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-white/10 blur-xl" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-white/5 blur-xl" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-finance-600 mb-6">
                Ready to transform how you manage your investments?
              </h2>
              <p className="text-xl text-gray-600 mb-10">
                Join thousands of investors who have already discovered the power of WealthHub's unified financial dashboard.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-6 py-3 border-blue-200 border-2 bg-white text-finance-700 rounded-md hover:bg-blue-300 transition-colors">
                  Start your free trial
                </button>
                <button className="px-6 py-3 border text-gray-600 rounded-md hover:bg-gray-300 transition-colors">
                  Schedule a demo
                </button>
              </div>
              
              <p className="mt-6 text-white/70 text-sm">
                No credit card required. 14-day free trial.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-xl text-finance-600 mb-4">WealthHub</h3>
              <p className="text-gray-600 mb-4">The all-in-one platform for tracking and managing your investments</p>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900 mb-4">Product</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-finance-600">Features</a></li>
                <li><a href="#" className="hover:text-finance-600">Pricing</a></li>
                <li><a href="#" className="hover:text-finance-600">Integrations</a></li>
                <li><a href="#" className="hover:text-finance-600">API</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900 mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-finance-600">Documentation</a></li>
                <li><a href="#" className="hover:text-finance-600">Blog</a></li>
                <li><a href="#" className="hover:text-finance-600">Knowledge Base</a></li>
                <li><a href="#" className="hover:text-finance-600">Community</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900 mb-4">Company</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-finance-600">About</a></li>
                <li><a href="#" className="hover:text-finance-600">Careers</a></li>
                <li><a href="#" className="hover:text-finance-600">Contact</a></li>
                <li><a href="#" className="hover:text-finance-600">Press</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 mb-4 md:mb-0">
              © 2025 WealthHub. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-600 hover:text-finance-600">Terms</a>
              <a href="#" className="text-gray-600 hover:text-finance-600">Privacy</a>
              <a href="#" className="text-gray-600 hover:text-finance-600">Security</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SinglePageLanding;