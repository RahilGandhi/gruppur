import React from 'react'
import SplineAreaChart from '../charts/AreaChart'

export function Performance () {
  return (
    <div className="bg-white rounded-xl p-4 md:p-6 ">
        <h4 className='text-xl font-semibold mb-4 text-slate-800 text-left'>Peformance</h4>
        <SplineAreaChart />
    </div>
  )
}