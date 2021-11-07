import { motion } from 'framer-motion'
import { useState } from 'react'

export const CustomSwitch = () => {
  const [isOn, setIsOn] = useState(false)
  const toggleSwitch = () => setIsOn(!isOn)

  return (
    <div
      className={`w-32 h-20 bg-gray-600 flex items-center rounded-full p-3 cursor-pointer ${
        isOn ? 'justify-start' : 'justify-end'
      }`}
      onClick={toggleSwitch}
    >
      <motion.div
        className="w-16 h-12 bg-white rounded-full"
        layout
        transition={spring}
      />
    </div>
  )
}

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30,
}
