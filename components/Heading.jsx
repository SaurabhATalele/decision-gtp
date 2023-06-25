import React from "react";
import localFont from "@next/font/local";
import { motion} from "framer-motion";
const zigfont = localFont({ src: "../public/fonts/Inter-Bold.ttf" });


const Heading = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3, type: "spring", delay: 1 }}
      className="z-20 absolute left-0 right-0"
    >
      <h1
        className={`text-primary text-center  font-extrabold pt-2 sm:pt-10 tracking-[5px] text-3xl md:text-5xl z-20 `}
      >
        Decision GPT
      </h1>
    </motion.div>
  );
};


export default Heading;
