import { useState } from "react"
import { Copy, MoreVertical, ChevronUp } from "lucide-react"
import TreemapChart from "../charts/Treemap"

// Sample data for the chart
const chartData = [10, 8, 12, 15, 13, 18, 20, 18, 22, 20, 25, 23, 21]

export default function BankCard() {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText("1246720490938")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold">PT. Bank Central Asia</h2>
            <p className="text-gray-600 text-sm text-left">Cards Details</p>
          </div>
          <div>
            <span className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full">Preferred</span>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="p-1 mb-1">
        <TreemapChart />
      </div>

      {/* Days */}
      {/* <div className="px-4 pb-4 flex justify-between text-xs text-gray-500">
        <span>Mon 21</span>
        <span>Tue 22</span>
        <span>Wed 23</span>
        <span>Thu 24</span>
        <span>Fri 25</span>
        <span>Sat 26</span>
        <span>Sun 27</span>
      </div> */}

      {/* Action buttons */}
      <div className="px-4 pb-4 flex gap-2">
        <button className="bg-blue-600 text-white p-0 rounded-lg w-[100px] text-center">Transfer</button>
        <button className="bg-gray-100 text-gray-700 rounded-lg w-[130px] text-center">Update Card</button>
        <button className="bg-gray-100 text-gray-700 rounded-lg w-[130px] text-center">
          Change Preferred
        </button>
        <button className="bg-gray-100 text-gray-700 p-2 rounded-full">
          <MoreVertical size={18} />
        </button>
      </div>

      {/* Account details */}
      <div className="px-4 py-2 border-t">
        <div className="flex justify-between py-1">
          <span className="text-gray-600 text-sm">Account holder</span>
          <span className="text-sm font-medium">Malik Priambudi Sugiono</span>
        </div>
        <div className="flex justify-between py-1">
          <span className="text-gray-600 text-sm">Bank Name</span>
          <span className="text-sm font-medium">Apps Name</span>
        </div>
        <div className="flex justify-between py-1">
          <span className="text-gray-600 text-sm">Bank Code</span>
          <div className="flex items-center">
            <span className="text-sm font-medium mr-1">1246720490938</span>
            <button onClick={copyToClipboard} className="text-gray-500">
              {copied ? <span className="text-green-500 text-xs">Copied!</span> : <Copy size={14} />}
            </button>
          </div>
        </div>
      </div>

      {/* Recent transactions */}
      <div className="px-4 py-3 border-t">
        <h3 className="text-sm text-gray-600 mb-2">Recent transaction from this card</h3>

        {/* Transaction 1 */}
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-3">
              <span className="font-bold">J</span>
            </div>
            <div>
              <p className="text-sm font-medium">From James</p>
              <p className="text-xs text-gray-500">Income • Jul 01, 2024 12:32</p>
            </div>
          </div>
          <span className="text-green-500 font-medium">+$102.99</span>
        </div>

        {/* Transaction 2 */}
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-3">
              <span className="font-bold">J</span>
            </div>
            <div>
              <p className="text-sm font-medium">Play Station Plus</p>
              <p className="text-xs text-gray-500">Expense • Jul 01, 2024 12:32</p>
            </div>
          </div>
          <span className="text-red-500 font-medium">-$9.48</span>
        </div>
      </div>

      {/* Report */}
      <div className="px-4 py-3 border-t">
        <h3 className="text-sm text-gray-600 mb-2">Report</h3>
        <div className="flex justify-between mb-2">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
            <span className="text-sm">Income</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
            <span className="text-sm">Expenses</span>
          </div>
        </div>
        <div className="flex justify-between">
          <span className="text-sm font-medium">$98,471.99</span>
          <span className="text-sm font-medium">$43,863.14</span>
        </div>
        <div className="mt-2">
          <div className="w-full bg-blue-600 h-1 rounded-full"></div>
        </div>
      </div>
    </div>
  )
}

