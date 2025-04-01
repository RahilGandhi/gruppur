export function SavingPlanSection() {
    return (
      <div className="bg-white h-[350px] rounded-xl w-[100%] sm:w-[40%] p-4 md:p-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xl font-semibold text-slate-800">Saving Plan</h2>
          <a href="#" className="text-[#4745a4] text-sm font-medium">
            See All
          </a>
        </div>
        <div className="space-y-6">
          <SavingPlanItem
            title="Bali Vacation"
            current={1950.21}
            target={4000}
            percentage={48}
            date="August 25 2022"
            color="#4745a4"
          />
          <SavingPlanItem
            title="New Gadget"
            current={790.21}
            target={1000}
            percentage={79}
            date="August 25 2022"
            color="#f9ba33"
          />
          <SavingPlanItem
            title="Charity"
            current={32111}
            target={100}
            percentage={32}
            date="August 25 2022"
            color="#31d3a3"
          />
        </div>
      </div>
    )
  }
  
  function SavingPlanItem({ title, current, target, percentage, date, color }) {
    return (
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1 gap-1">
          <h3 className="font-medium text-slate-600">{title}</h3>
          <span className="text-xs sm:text-sm text-[#4c608d]">Target: {date}</span>
        </div>
        <div className="flex items-center justify-between mb-2">
          <div className="text-base sm:text-lg font-bold text-slate-500">
            ${current.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            <span className="text-xs sm:text-sm text-[#667085] font-normal">/${target.toLocaleString()}</span>
          </div>
          <div className="text-base sm:text-lg font-bold" style={{ color }}>
            {percentage}%
          </div>
        </div>
        <div className="w-full h-2 bg-[#eeeeee] rounded-full overflow-hidden">
          <div className="h-full rounded-full" style={{ width: `${percentage}%`, backgroundColor: color }}></div>
        </div>
      </div>
    )
  }
  
  