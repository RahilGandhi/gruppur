import React from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { DollarSign, TrendingUp, PieChart as PieChartIcon, Landmark, ChevronDown, ArrowUpCircle, ArrowDownCircle, MoreHorizontal, List, Menu, X } from 'lucide-react'; // Added X for close icon
import PageTitle from '../components/PageTitle/Pagetitle';

// Mock Data - This data would typically come from an API
const statsData = {
  totalNetworth: { id: 'networth', title: "Total Net Worth", value: "$575,230.00", change: "+2.5%", changeType: "positive", icon: <DollarSign className="w-7 h-7 text-blue-600" /> },
  equities: { id: 'equities', title: "Equities", value: "$250,100.00", change: "+1.8%", changeType: "positive", icon: <TrendingUp className="w-7 h-7 text-green-500" /> },
  mutualFunds: { id: 'funds', title: "Mutual Funds", value: "$180,500.00", change: "-0.5%", changeType: "negative", icon: <PieChartIcon className="w-7 h-7 text-indigo-500" /> },
  cash: { id: 'cash', title: "Cash & Equivalents", value: "$44,630.00", change: "+0.1%", changeType: "positive", icon: <Landmark className="w-7 h-7 text-yellow-500" /> },
};

const appreciationData = [
  { name: 'Jan', Stocks: 40000, Funds: 24000, Bonds: 15000, Crypto: 8000 },
  { name: 'Feb', Stocks: 42000, Funds: 23000, Bonds: 15500, Crypto: 9500 },
  { name: 'Mar', Stocks: 45000, Funds: 26000, Bonds: 16000, Crypto: 7500 },
  { name: 'Apr', Stocks: 43000, Funds: 27000, Bonds: 16200, Crypto: 11000 },
  { name: 'May', Stocks: 47000, Funds: 28000, Bonds: 16500, Crypto: 10500 },
  { name: 'Jun', Stocks: 50000, Funds: 29000, Bonds: 17000, Crypto: 12000 },
];

const topGainersData = [
  { name: 'AAPL', gain: 2500, fill: '#3b82f6' }, // Tailwind blue-500
  { name: 'MSFT', gain: 1800, fill: '#60a5fa' }, // Tailwind blue-400
  { name: 'GOOGL', gain: 1500, fill: '#93c5fd' }, // Tailwind blue-300
  { name: 'AMZN', gain: 1200, fill: '#bfdbfe' }, // Tailwind blue-200
  { name: 'TSLA', gain: 900, fill: '#dbeafe' },   // Tailwind blue-100
];

const investmentDistributionData = [
  { name: 'Stocks', value: 45, color: '#2563eb' },      // Tailwind blue-600
  { name: 'Mutual Funds', value: 25, color: '#3b82f6' }, // Tailwind blue-500
  { name: 'Bonds', value: 15, color: '#60a5fa' },        // Tailwind blue-400
  { name: 'Crypto', value: 10, color: '#93c5fd' },       // Tailwind blue-300
  { name: 'Cash', value: 5, color: '#bfdbfe' },          // Tailwind blue-200
];

const majorInvestmentsData = [
  { id: 1, name: 'Vanguard S&P 500 ETF (VOO)', type: 'ETF', value: "$50,000", change: "+2.1%", changeType: "positive", color: "bg-sky-100 text-sky-700" },
  { id: 2, name: 'Bitcoin (BTC)', type: 'Crypto', value: "$25,000", change: "+5.8%", changeType: "positive", color: "bg-amber-100 text-amber-700" },
  { id: 3, name: 'Fidelity Contrafund (FCNTX)', type: 'Mutual Fund', value: "$30,000", change: "-0.5%", changeType: "negative", color: "bg-indigo-100 text-indigo-700" },
  { id: 4, name: 'Apple Inc. (AAPL)', type: 'Stock', value: '$15,000', change: '+1.2%', changeType: "positive", color: "bg-gray-100 text-gray-700" },
  { id: 5, name: 'US Treasury Bond', type: 'Bond', value: '$10,000', change: '+0.3%', changeType: "positive", color: "bg-lime-100 text-lime-700" },
];

const HeroStatsCard = ({ title, value, change, changeType, icon }) => {
  const isPositive = changeType === "positive";
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="p-5">
        <div className="flex items-center">
          <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full mr-4">
            {icon}
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-500 truncate text-left">{title}</p>
            <p className="text-2xl font-semibold text-gray-800 text-left">{value}</p>
          </div>
        </div>
        <div className={`mt-3 text-sm flex items-center ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
          {isPositive ? <ArrowUpCircle className="w-4 h-4 mr-1" /> : <ArrowDownCircle className="w-4 h-4 mr-1" />}
          {change}
          <span className="text-gray-500 ml-1">vs last month</span>
        </div>
      </div>
    </div>
  );
};

const HeroChip = ({ text, colorClass = "bg-blue-100 text-blue-700" }) => {
  return (
    <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${colorClass}`}>
      {text}
    </span>
  );
};


// Main Dashboard App Component
function Dashboard() {

  return (
    <div className="min-h-screen"> {/* Subtle gradient background */}
      <PageTitle title={'Dashboard'}/>
      <main className="container mx-auto p-1 sm:p-1 lg:p-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {Object.values(statsData).map((stat) => (
            <HeroStatsCard
              key={stat.id}
              title={stat.title}
              value={stat.value}
              change={stat.change}
              changeType={stat.changeType}
              icon={stat.icon}
            />
          ))}
        </div>

        {/* Second Row: Charts - Styled with HeroUI card principles */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 mb-8">
          <div className="lg:col-span-3 bg-white p-5 sm:p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-1 text-left">Asset Appreciation</h3>
            <p className="text-xs text-gray-500 mb-4 text-left">Last 6 months performance</p>
            <ResponsiveContainer width="100%" height={350}>
              {/* Updated LineChart: Removed CartesianGrid, changed line type to "natural" for smoothness */}
              <LineChart data={appreciationData} margin={{ top: 5, right: 20, left: -15, bottom: 5 }}>
                {/* <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" /> REMOVED for no grid */}
                <XAxis dataKey="name" tick={{ fill: '#6b7280', fontSize: 12 }} axisLine={{ stroke: '#e5e7eb' }} tickLine={{ stroke: '#e5e7eb' }}/>
                <YAxis tickFormatter={(value) => `$${value/1000}k`} tick={{ fill: '#6b7280', fontSize: 12 }} axisLine={{ stroke: '#e5e7eb' }} tickLine={{ stroke: '#e5e7eb' }}/>
                <Tooltip
                  formatter={(value, name) => [`$${value.toLocaleString()}`, name]}
                  labelStyle={{ color: '#374151', fontWeight: '600' }}
                  itemStyle={{ color: '#374151' }}
                  contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.98)', borderRadius: '0.5rem', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', border: '1px solid #e0e0e0' }}
                />
                <Legend wrapperStyle={{ color: '#4b5563', paddingTop: '10px', fontSize: '12px' }} />
                <Line type="natural" dataKey="Stocks" stroke="#2563eb" strokeWidth={2.5} dot={{ r: 3, fill: '#2563eb' }} activeDot={{ r: 6, strokeWidth: 2, stroke: '#fff', fill: '#2563eb' }} />
                <Line type="natural" dataKey="Funds" stroke="#3b82f6" strokeWidth={2.5} dot={{ r: 3, fill: '#3b82f6' }} activeDot={{ r: 6, strokeWidth: 2, stroke: '#fff', fill: '#3b82f6' }}/>
                <Line type="natural" dataKey="Bonds" stroke="#60a5fa" strokeWidth={2.5} dot={{ r: 3, fill: '#60a5fa' }} activeDot={{ r: 6, strokeWidth: 2, stroke: '#fff', fill: '#60a5fa' }}/>
                <Line type="natural" dataKey="Crypto" stroke="#93c5fd" strokeWidth={2.5} dot={{ r: 3, fill: '#93c5fd' }} activeDot={{ r: 6, strokeWidth: 2, stroke: '#fff', fill: '#93c5fd' }}/>
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="lg:col-span-2 bg-white p-5 sm:p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-1 text-left">Top Equity Gainers</h3>
            <p className="text-xs text-gray-500 mb-4 text-left">This month</p>
            <ResponsiveContainer width="100%" height={350}>
              {/* Updated BarChart: Removed CartesianGrid */}
              <BarChart data={topGainersData} layout="vertical" margin={{ top: 5, right: 25, left: 5, bottom: 5 }}>
                {/* <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" /> REMOVED for no grid */}
                <XAxis type="number" tickFormatter={(value) => `$${value/1000}k`} tick={{ fill: '#6b7280', fontSize: 12 }} axisLine={{ stroke: '#e5e7eb' }} tickLine={{ stroke: '#e5e7eb' }} />
                <YAxis dataKey="name" type="category" tick={{ fill: '#6b7280', fontSize: 12 }} width={55} axisLine={{ stroke: '#e5e7eb' }} tickLine={{ stroke: '#e5e7eb' }}/>
                <Tooltip
                  formatter={(value) => [`$${value.toLocaleString()}`, 'Gain']}
                  labelStyle={{ color: '#374151', fontWeight: '600' }}
                  itemStyle={{ color: '#374151' }}
                   contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.98)', borderRadius: '0.5rem', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', border: '1px solid #e0e0e0' }}
                />
                <Bar dataKey="gain" barSize={18} radius={[0, 4, 4, 0]}>
                    {topGainersData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Third Row: Pie Chart and HeroUI-Styled Table */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
          <div className="lg:col-span-2 bg-white p-5 sm:p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-1 text-left">Investment Distribution</h3>
             <p className="text-xs text-gray-500 mb-4 text-left">Current portfolio allocation</p>
            <ResponsiveContainer width="100%" height={300}>
              {/* PieChart does not use CartesianGrid, so no change needed here for grid removal */}
              <PieChart>
                <Pie
                  data={investmentDistributionData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={90}
                  innerRadius={45}
                  dataKey="value"
                  label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`}
                >
                  {investmentDistributionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} stroke={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value, name) => [`${value}%`, name]}
                  contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.98)', borderRadius: '0.5rem', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', border: '1px solid #e0e0e0' }}
                />
                <Legend
                  iconSize={10}
                  layout="vertical"
                  verticalAlign="middle"
                  align="right"
                  wrapperStyle={{ fontSize: '12px', color: '#4b5563', lineHeight: '1.8' }}
                  payload={investmentDistributionData.map(item => ({ value: item.name, type: 'square', color: item.color }))}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="lg:col-span-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
            <div className="p-5 sm:p-6 flex justify-between items-center border-b border-gray-200">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-700">Major Holdings</h3>
                <button className="text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center hover:underline">
                    View All <List size={14} className="ml-1"/>
                </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="py-3 px-4 sm:px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="py-3 px-4 sm:px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Type</th>
                    <th className="py-3 px-4 sm:px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Value</th>
                    <th className="py-3 px-4 sm:px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Change (24h)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {majorInvestmentsData.map((item) => (
                    <tr key={item.id} className="hover:bg-blue-50/30 transition-colors duration-150">
                      <td className="py-3.5 px-4 sm:px-6 text-sm text-gray-800 font-medium whitespace-nowrap">{item.name}</td>
                      <td className="py-3.5 px-4 sm:px-6 text-sm text-gray-600 whitespace-nowrap">
                        <HeroChip text={item.type} colorClass={item.color} />
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 text-sm text-gray-800 font-medium text-right whitespace-nowrap">{item.value}</td>
                      <td className={`py-3.5 px-4 sm:px-6 text-sm font-medium text-right whitespace-nowrap ${item.changeType === "positive" ? 'text-green-500' : 'text-red-500'}`}>
                        {item.change}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
