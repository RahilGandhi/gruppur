const FearAndGreedIndex = () => {
    // Sample data
    const currentValue = 56
    const sentiment = "Neutral"
    const yesterdayValue = 50
    const yesterdaySentiment = "Neutral"
    const lastMonthValue = 28
    const lastMonthSentiment = "Fear"
  
    // Calculate position of the indicator dot (0-100%)
    const dotPosition = `${currentValue}%`
  
    return (
      <div className="bg-white rounded-lg p-5 shadow-sm w-[350px]">
        <div className="flex justify-between items-start mb-2">
          <h2 className="text-lg font-medium text-gray-800">Fear and Greed</h2>
          <div className="flex items-center">
            <div className="h-2 w-2 rounded-full bg-yellow-400 mr-2"></div>
            <span className="text-gray-600 text-sm">Neutral</span>
          </div>
        </div>
  
        <div className="text-4xl font-bold text-gray-800 mb-4">{currentValue}%</div>
  
        <div className="relative mb-1">
          <div className="h-2 rounded-full overflow-hidden flex">
            <div className="w-1/5 bg-red-500"></div>
            <div className="w-2/5 bg-yellow-400"></div>
            <div className="w-2/5 bg-green-500"></div>
          </div>
  
          {/* Indicator dot */}
          <div
            className="absolute top-0 h-4 w-4 bg-black rounded-full -mt-1 -ml-2 shadow-sm"
            style={{ left: dotPosition }}
          ></div>
        </div>
  
        <div className="flex justify-between text-xs text-gray-500 mb-4">
          <span>Index: 0%</span>
          <span>Index: 100%</span>
        </div>
  
        <div className="flex justify-between text-sm">
          <div>
            <div className="text-gray-500">Yesterday</div>
            <div className="font-medium">
              {yesterdaySentiment} - {yesterdayValue}
            </div>
          </div>
  
          <div className="text-right">
            <div className="text-gray-500">Last Month</div>
            <div className="font-medium">
              {lastMonthSentiment} - {lastMonthValue}
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default FearAndGreedIndex