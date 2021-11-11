import { motion } from 'framer-motion'
import { Dispatch, VFC } from 'react'
import { initialTabs as tabs } from './ingredient'

type Props = {
  selectedTab: { icon: string; label: string }
  setSelectedTab: Dispatch<
    React.SetStateAction<{
      icon: string
      label: string
    }>
  >
}

export const Navbar: VFC<Props> = ({ selectedTab, setSelectedTab }) => {
  return (
    <nav className="bg-white pt-1 px-1 rounded-md rounded-bl-none rounded-br-none border-b-2 border-gray-300 h-14">
      <ul className="flex w-full">
        {tabs.map((item) => (
          <li
            key={item.label}
            className={` text-gray-600 font-semibold rounded-lg rounded-bl-none rounded-br-none w-full px-3
                           relative cursor-pointer h-12 flex justify-between items-center flex-1 min-w-0 select-none  ${
                             item === selectedTab ? 'bg-gray-100' : 'bg-white'
                           } `}
            onClick={() => setSelectedTab(item)}
          >
            {`${item.icon} ${item.label}`}
            {item === selectedTab ? (
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-400"
                layoutId="underline"
              />
            ) : null}
          </li>
        ))}
      </ul>
    </nav>
  )
}
