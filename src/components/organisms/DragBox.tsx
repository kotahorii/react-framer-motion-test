import { motion } from 'framer-motion'

export const DragBox = () => {
  return (
    <div className="w-60 h-60 bg-gray-600 rounded-lg">
      <motion.div
        className="w-32 h-32 rounded-lg bg-white"
        drag
        dragConstraints={{
          top: 0,
          left: 0,
          right: 100,
          bottom: 100,
        }}
      />
    </div>
  )
}
