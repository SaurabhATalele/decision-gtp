import React from 'react'
import { motion } from 'framer-motion'






const Output = (props) => {
  return (
    <motion.textarea
    id="op"
        readOnly
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, type: "spring" }}
        className={`w-screen text-left text-lg overflow-y-scroll  sm:bg-transparent  self-center focus:outline-none mt-16  max-w-7xl h-72 rounded-2xl p-4  flex-wrap bg-white text-primary  scrollbar-none z-20  ${
          props.answer == "Type a question first !" ||
          props.answer == "Loading Response...\nThis may take some time"
            ? "animate-pulse tracking-[4px] font-extrabold text-center"
            : "tracking-wide font-medium text-justify"
        }`}
        value={props.answer}
      />
  )
}

export default Output