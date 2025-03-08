import React from 'react'
import { motion } from 'framer-motion';
import { FaChartLine, FaCoins, FaExchangeAlt, FaChartBar } from 'react-icons/fa';
import { RiStockFill } from 'react-icons/ri';
import { SiCoinmarketcap } from 'react-icons/si';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-dark-300">
      {/* Navigation */}
      <nav className="ml-[-15px] mt-[-15px] bg-dark-200/50 backdrop-blur-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-blue-500">Gruppur</h1>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#dashboard" className="text-gray-300 hover:text-white transition-colors">Dashboard</a>
              <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-300 hover:text-white transition-colors">Sign In</button>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Left Content */}
              <div className="flex-1 text-left">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="inline-flex items-center space-x-2 bg-dark-100 rounded-full px-4 py-2 mb-6">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span className="text-gray-300">The Future of Financial Dashboards</span>
                  </div>
                  <h1 className="text-6xl font-bold mb-6">
                    Your{' '}
                    <span className="text-blue-500 relative">
                      complete
                      <div className="absolute w-full h-1 bg-blue-500/30 bottom-1"></div>
                    </span>
                    <br />
                    financial
                    <br />
                    dashboard
                  </h1>
                  <p className="text-xl text-gray-400 mb-8 max-w-2xl">
                    Monitor markets, track investments, and make informed decisions with Gruppur's all-in-one financial dashboard.
                  </p>
                  <div className="flex space-x-4">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg transition-colors">
                      Get Started
                    </button>
                    <button className="border border-gray-700 hover:border-gray-600 text-white px-8 py-3 rounded-lg transition-colors">
                      See Demo
                    </button>
                  </div>
                </motion.div>
              </div>

              {/* Right Content - Dashboard Preview */}
              <div className="flex-1">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="grid gap-6"
                >
                  {/* Market Overview Card */}
                  <div className="bg-dark-700 p-6 rounded-2xl">
                    <h3 className="text-xl mb-4 flex items-center gap-2">
                      <FaChartLine />
                      Market Overview
                    </h3>
                    <div className="h-32 flex items-end space-x-2">
                      {[40, 70, 55, 90, 80, 100, 75].map((height, i) => (
                        <div
                          key={i}
                          className="w-full bg-blue-500/20 rounded-t"
                          style={{ height: `${height}%` }}
                        ></div>
                      ))}
                    </div>
                  </div>

                  {/* Portfolio Value Card */}
                  <div className="bg-dark-100 p-6 rounded-2xl">
                    <h3 className="text-xl mb-4">Portfolio Value</h3>
                    <div className="mb-2">
                      <span className="text-3xl font-bold">$28,459.35</span>
                      <span className="text-green-500 ml-2">+5.23% this month</span>
                    </div>
                    <div className="h-16">
                      <svg viewBox="0 0 100 20" className="w-full h-full">
                        <path
                          d="M0 10 Q 25 5, 50 15 T 100 10"
                          fill="none"
                          stroke="#3b82f6"
                          strokeWidth="0.5"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Stocks Card */}
                  <div className="bg-dark-100 p-6 rounded-2xl">
                    <h3 className="text-xl mb-4 flex items-center gap-2">
                      <RiStockFill />
                      Stocks
                    </h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>AAPL</span>
                        <span className="text-green-500">+2.4%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>MSFT</span>
                        <span className="text-green-500">+2.4%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>AMZN</span>
                        <span className="text-green-500">+2.4%</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-dark-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Left Content */}
              <div className="flex-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="inline-flex items-center space-x-2 bg-dark-100/50 rounded-full px-4 py-2 mb-6">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span className="text-gray-300">The Dashboard</span>
                  </div>
                  <h2 className="text-5xl font-bold mb-6">
                    Your financial data,
                    <br />
                    beautifully visualized
                  </h2>
                  <p className="text-xl text-gray-400 mb-8 max-w-2xl">
                    Gruppur transforms complex financial data into intuitive visualizations 
                    that help you understand market trends and make better investment decisions.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <motion.div 
                      className="bg-slate-600/50 p-6 rounded-2xl"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      <div className="text-gray-400 mb-2">Assets Tracked</div>
                      <div className="text-4xl font-bold">+250k</div>
                    </motion.div>
                    
                    <motion.div 
                      className="bg-dark-100/50 p-6 rounded-2xl"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <div className="text-gray-400 mb-2">Market Coverage</div>
                      <div className="text-4xl font-bold">98%</div>
                    </motion.div>
                    
                    <motion.div 
                      className="bg-dark-100/50 p-6 rounded-2xl"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <div className="text-gray-400 mb-2">Daily Updates</div>
                      <div className="text-4xl font-bold">17k</div>
                    </motion.div>
                    
                    <motion.div 
                      className="bg-slate-600/50 p-6 rounded-2xl"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <div className="text-gray-400 mb-2">User Satisfaction</div>
                      <div className="text-4xl font-bold">99%</div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>

              {/* Right Content - Dashboard Preview */}
              <div className="flex-1">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="bg-blue-600 p-8 rounded-2xl relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-700/20"></div>
                  <h3 className="text-3xl font-bold mb-8 relative z-10">Gruppur Dashboard</h3>
                  <div className="grid grid-cols-3 gap-4 relative z-10">
                    <div className="bg-dark-100/20 p-4 rounded-xl backdrop-blur-sm">
                      <div className="text-sm mb-2">S&P 500</div>
                      <div className="text-green-400">+1.2%</div>
                    </div>
                    <div className="bg-dark-100/20 p-4 rounded-xl backdrop-blur-sm">
                      <div className="text-sm mb-2">NASDAQ</div>
                      <div className="text-green-400">+2.4%</div>
                    </div>
                    <div className="bg-dark-100/20 p-4 rounded-xl backdrop-blur-sm">
                      <div className="text-sm mb-2">DOW</div>
                      <div className="text-green-400">+0.8%</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-dark-200 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Everything you need in
              <span className="gradient-text"> one platform</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={<FaChartLine className="text-primary text-3xl" />}
                title="Real-time Analytics"
                description="Track market movements with advanced charting and technical analysis tools"
              />
              <FeatureCard
                icon={<RiStockFill className="text-primary text-3xl" />}
                title="Stock Market"
                description="Access global stock markets with comprehensive company data and insights"
              />
              <FeatureCard
                icon={<FaCoins className="text-primary text-3xl" />}
                title="Cryptocurrency"
                description="Monitor crypto markets 24/7 with real-time price updates and portfolio tracking"
              />
              <FeatureCard
                icon={<FaChartBar className="text-primary text-3xl" />}
                title="Mutual Funds"
                description="Compare and analyze mutual funds with detailed performance metrics"
              />
              <FeatureCard
                icon={<SiCoinmarketcap className="text-primary text-3xl" />}
                title="Bonds"
                description="Stay updated with government and corporate bond yields and investments"
              />
              <FeatureCard
                icon={<FaExchangeAlt className="text-primary text-3xl" />}
                title="Forex Trading"
                description="Track currency exchange rates and manage forex investments"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-700 rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold mb-6">
                Ready to take control of your
                <span className="gradient-text"> financial future?</span>
              </h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Join thousands of traders and investors who trust Gruppur for their financial decisions.
              </p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-dark-200 border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-400">
            <p>© 2024 Gruppur. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-slate-700 p-6 rounded-xl"
      >
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </motion.div>
    );
}

export default LandingPage