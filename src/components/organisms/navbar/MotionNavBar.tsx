import { useState } from 'react'
import { initialTabs } from './ingredient'
import { MainContent } from './MainContent'
import { Navbar } from './Navbar'

export const MotionNavBar = () => {
  const [selectedTab, setSelectedTab] = useState(initialTabs[0])
  return (
    <div className="w-1/2 h-1/2 bg-white rounded-xl shadow-lg overflow-hidden flex flex-col ">
      <Navbar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <MainContent selectedTab={selectedTab} />
    </div>
  )
}
