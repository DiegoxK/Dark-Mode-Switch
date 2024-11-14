"use client";
import { cn } from "@/lib/utils";
import * as motion from "framer-motion/client";
import { useState } from "react";

import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "tailwind.config";

const twColors = resolveConfig(tailwindConfig).theme.colors;

export default function Home() {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn((prev) => {
      return !prev;
    });
  };

  const bgVariants = {
    on: {
      backgroundColor: twColors.red[300],
      transition: { duration: 2 },
    },
    off: {
      backgroundColor: twColors.yellow[300],
      transition: { duration: 2 },
    },
  };

  const frVariants = {
    on: {
      backgroundColor: twColors.red[500],
      transition: { duration: 2 },
    },
    off: {
      backgroundColor: twColors.yellow[500],
      transition: { duration: 2 },
    },
  };

  return (
    <motion.div
      variants={bgVariants}
      animate={isOn ? "on" : "off"}
      onClick={toggleSwitch}
      className={cn(
        "flex w-[100px] cursor-pointer rounded-full",
        isOn ? "justify-end" : "justify-start",
      )}
    >
      <motion.div
        layout
        variants={frVariants}
        animate={isOn ? "on" : "off"}
        transition={{
          type: "spring",
          stiffness: 600,
          damping: 37,
        }}
        className={cn("m-[6px] h-10 w-10 rounded-full")}
      ></motion.div>
    </motion.div>
  );
}
