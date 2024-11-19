"use client";

import { cn } from "@/lib/utils";
import * as motion from "framer-motion/client";
import { useState } from "react";
import { useTheme } from "next-themes";

import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "tailwind.config";
import type { Variants } from "framer-motion";
import { MotionCloud, MotionStars } from "@/components/vectors";

const twColors = resolveConfig(tailwindConfig).theme.colors;

export default function Home() {
  const [isOn, setIsOn] = useState(false);
  const { setTheme } = useTheme();

  const toggleSwitch = () => {
    setIsOn((prev) => {
      if (prev) {
        setTheme("light");
      } else {
        setTheme("dark");
      }
      return !prev;
    });
  };

  const bgVariants: Variants = {
    sun: {
      background: "linear-gradient(#77BDFF, #A2D1FD)",
    },
    moon: {
      background: "linear-gradient(#172532, #161F26)",
      boxShadow: "inset 0 4px 4px 0 #0000003F",
    },
  };

  const frVariants: Variants = {
    sun: {
      backgroundColor: "#FFD986",
      filter: "drop-shadow(0 1px 4px #0000003F)",
      boxShadow: "inset 0 4px 4px 0 #FFFFFFC",
    },
    moon: {
      backgroundColor: "#D1D6DB",
      boxShadow: "0 1px 10px 3px #D7DADD3F",
    },
  };

  return (
    <motion.div
      initial={false}
      variants={bgVariants}
      animate={isOn ? "moon" : "sun"}
      onClick={toggleSwitch}
      className={cn(
        "relative flex w-[125px] cursor-pointer overflow-hidden rounded-full",
        isOn ? "justify-end" : "justify-start",
      )}
    >
      <Clouds isOn={isOn} />
      <MotionStars
        initial={false}
        animate={isOn ? { opacity: 100 } : { opacity: 0 }}
        transition={{
          ease: "backOut",
        }}
        className="absolute left-[12px] top-[8px] fill-[#CDD2D8]"
      />
      <motion.div
        layout
        variants={frVariants}
        animate={isOn ? "moon" : "sun"}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 25,
        }}
        className="m-[6px] flex h-10 w-10 items-start justify-normal rounded-full"
      >
        <motion.div
          layout
          initial={false}
          animate={isOn ? { opacity: 100 } : { opacity: 0 }}
          transition={{
            ease: "backOut",
          }}
          style={{
            boxShadow: "0 0 4px 0 #44505F3F",
          }}
          className="m-[0.8px] h-[33px] w-[33px] rounded-full bg-[#44505F]"
        />
      </motion.div>
    </motion.div>
  );
}

const Clouds = ({ isOn }: { isOn: boolean }) => {
  return (
    <>
      <MotionCloud
        initial={{
          rotate: 4,
        }}
        transition={{
          ease: "easeInOut",
        }}
        animate={isOn ? { x: 60, y: 15 } : { x: 0, y: 0 }}
        className="absolute bottom-[-19px] right-[-22px] fill-white/20"
      />
      <MotionCloud
        initial={false}
        transition={{
          ease: "easeInOut",
        }}
        animate={isOn ? { x: 80, y: 15 } : { x: 0, y: 0 }}
        className="absolute bottom-[-25px] right-0 fill-white"
      />
      <MotionCloud
        initial={{
          rotate: -5,
        }}
        transition={{
          ease: "easeInOut",
        }}
        animate={isOn ? { x: -80, y: 15 } : { x: 0, y: 0 }}
        className="absolute bottom-[-18px] left-0 fill-white/20"
      />
      <MotionCloud
        initial={{
          rotate: -14,
        }}
        transition={{
          ease: "easeInOut",
        }}
        animate={isOn ? { x: -56, y: 15 } : { x: 0, y: 0 }}
        className="absolute bottom-[-32px] left-[-22px] fill-white"
      />
    </>
  );
};
