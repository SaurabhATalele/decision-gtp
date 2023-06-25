import React from 'react'
import { motion } from 'framer-motion'
import localFont from "@next/font/local";
const Inter = localFont({ src: "../public/fonts/Inter-Regular.ttf" });


const Input = (props) => {
  return (
    <motion.input
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, type: "spring", delay: 0.2 }}
        type="text"
        className={`${Inter.className} self-center focus:outline-none border-1 border-[#202123] m-4 p-4 rounded-2xl bg-three text-primary w-4/5 tracking-wide z-20 placeholder-secondary font-bold font-inter `}
        value={props.input}
        onChange={props.setterInput}
        onKeyDown={(e) => (
          e.keyCode === 13 ? props.buttonClick(e) : null
        )}
        placeholder="Ask question here..."
        
      />
  )
}

export default Input