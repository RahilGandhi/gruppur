import React, { useEffect, useState } from 'react'
import { getProfile } from '../api/api'
import { OverviewSection } from '../components/dashboard/OverviewCards';
import { SavingPlanSection } from '../components/dashboard/PortfolioDistribution';
import { Performance } from '../components/dashboard/Performance';

const Dashboard = () => {

  const data = [
    { name: 'Equity', value: 400 },
    { name: 'Mutual Funds', value: 300 },
    { name: 'Bonds', value: 300 },
  ];

  return (
    <div className="w-[100%] bg-zinc-100 p-2">
      <div className='flex gap-5 flex-wrap'>
        <OverviewSection />
        <SavingPlanSection />
        <Performance />
      </div>
    </div>
  )
}

export default Dashboard
