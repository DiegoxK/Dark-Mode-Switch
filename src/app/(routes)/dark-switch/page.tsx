"use client";

import { cn } from "@/lib/utils";
import * as motion from "framer-motion/client";
import { useState } from "react";

import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "tailwind.config";
import type { Variants } from "framer-motion";
import { MotionCloud } from "@/components/vectors";

const twColors = resolveConfig(tailwindConfig).theme.colors;

export default function Home() {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn((prev) => {
      return !prev;
    });
  };

  const bgVariants: Variants = {
    sun: {
      background: "linear-gradient(#77BDFF, #A2D1FD)",
    },
    moon: {
      backgroundColor: twColors.slate[300],
    },
  };

  const frVariants: Variants = {
    sun: {
      backgroundColor: "#FFD986",
      filter: "drop-shadow(0 1px 4px #0000003F)",
      boxShadow: "inset 0 4px 4px 0 #FFFFFFC",
    },
    moon: {
      backgroundColor: twColors.slate[500],
    },
  };

  return (
    <motion.div
      variants={bgVariants}
      animate={isOn ? "moon" : "sun"}
      onClick={toggleSwitch}
      className={cn(
        "relative flex w-[130px] cursor-pointer overflow-hidden rounded-full",
        isOn ? "justify-end" : "justify-start",
      )}
    >
      <MotionCloud
        initial={false}
        animate={isOn ? { x: 200 } : { x: 0 }}
        className="absolute bottom-[-19px] right-[-22px] rotate-[4deg] fill-white/20"
      />
      <MotionCloud
        initial={false}
        animate={isOn ? { x: 200 } : { x: 0 }}
        className="absolute bottom-[-25px] right-0 fill-white"
      />
      <MotionCloud
        initial={false}
        animate={isOn ? { x: -200 } : { x: 0 }}
        className="absolute bottom-[-18px] left-0 rotate-[-5deg] fill-white/20"
      />

      <MotionCloud
        initial={false}
        animate={isOn ? { x: -200 } : { x: 0 }}
        className="absolute bottom-[-32px] left-[-18px] rotate-[-14deg] fill-white"
      />
      <motion.div
        layout
        variants={frVariants}
        animate={isOn ? "moon" : "sun"}
        transition={{
          type: "spring",
          stiffness: 600,
          damping: 37,
        }}
        className="m-[6px] flex h-10 w-10 items-center justify-center rounded-full"
      >
        <motion.div layout className="h-[33px] w-[33px] rounded-full" />
      </motion.div>
    </motion.div>
  );
}
