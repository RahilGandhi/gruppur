import { ArrowRight, TrendingUp, TrendingDown } from "lucide-react"

export function OverviewSection() {
  return (
    <div className="bg-white rounded-xl p-4 md:p-6">
      <h2 className="text-xl font-semibold mb-4 text-slate-800 text-left">Overview</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <OverviewCard
          title="Your Balance"
          value="$28,891.138"
          percentChange={15}
          percentChangeType="positive"
          bgColor="#4745a4"
          textColor="white"
          icon={
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6" />
                <line x1="2" x2="22" y1="20" y2="20" />
              </svg>
            </div>
          }
        />
        <OverviewCard
          title="Saving"
          value="$1,050.44"
          percentChange={10}
          percentChangeType="negative"
          bgColor="white"
          textColor="black"
          icon={
            <div className="w-10 h-10 rounded-full bg-[#e6f7ef] flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#31d3a3"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
                <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
              </svg>
            </div>
          }
        />
        <OverviewCard
          title="Expenses"
          value="$200.31"
          percentChange={2}
          percentChangeType="positive"
          bgColor="white"
          textColor="black"
          icon={
            <div className="w-10 h-10 rounded-full bg-[#fff8e7] flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#f9ba33"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                <line x1="7" y1="7" x2="7.01" y2="7" />
              </svg>
            </div>
          }
        />
        <OverviewCard
          title="Incomes"
          value="$21,121.0"
          percentChange={8}
          percentChangeType="positive"
          bgColor="white"
          textColor="black"
          icon={
            <div className="w-10 h-10 rounded-full bg-[#e6f1ff] flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#1775e4"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </div>
          }
        />
      </div>
    </div>
  )
}

function OverviewCard({ title, value, percentChange, percentChangeType, bgColor, textColor, icon }) {
  return (
    <div className="rounded-xl p-4" style={{ backgroundColor: bgColor, color: textColor }}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
        <div className="flex items-center space-x-2">
          {icon}
          <h3 className="font-medium">{title}</h3>
        </div>
        <div
          className={`flex items-center w-[60px] text-xs px-2 py-1 rounded-full ${
            percentChangeType === "positive" ? "bg-[#e6f7ef] text-[#31d3a3]" : "bg-[#ffe6eb] text-[#fe3766]"
          }`}
        >
          {percentChangeType === "positive" ? (
            <TrendingUp className="h-3 w-3 mr-1" />
          ) : (
            <TrendingDown className="h-3 w-3 mr-1" />
          )}
          {percentChange}%
        </div>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-xl md:text-2xl font-bold">{value}</span>
        <ArrowRight className="h-5 w-5" />
      </div>
    </div>
  )
}

