import { motion } from 'framer-motion'

export const MotionBox = () => {
  return (
    <motion.div
      className="w-32 h-32 bg-white"
      animate={{ scale: 2 }}
      transition={{ duration: 0.5 }}
    />
  )
}
