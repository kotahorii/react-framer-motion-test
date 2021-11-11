import { VFC } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

type Props = {
  selectedTab: { icon: string; label: string }
}

export const MainContent: VFC<Props> = ({ selectedTab }) => {
  return (
    <main className="flex justify-center items-center text-9xl flex-grow select-none">
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={selectedTab ? selectedTab.label : 'empty'}
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.15 }}
        >
          {selectedTab ? selectedTab.icon : '😋'}
        </motion.div>
      </AnimatePresence>
    </main>
  )
}
