import { motion } from 'framer-motion'
import { useState } from 'react'

export const ScaleCorrection = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <motion.div
        layout
        initial={{ borderRadius: 50 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`bg-white flex justify-center items-center rounded-full cursor-pointer ${
          isOpen ? 'w-48 h-48' : 'w-10/12 h-1/2'
        }`}
      >
        <motion.div layout className="w-20 h-20 bg-red-400 rounded-full" />
      </motion.div>
    </div>
  )
}
