"use client";

import { cn } from "@/lib/utils";
import * as motion from "framer-motion/client";
import { useState } from "react";

import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "tailwind.config";
import { animate, useMotionValue, useTransform } from "framer-motion";
import { interpolate } from "flubber";
import { note, star } from "../morphing/paths";

const twColors = resolveConfig(tailwindConfig).theme.colors;

export default function SwitchMorph() {
  const [isOn, setIsOn] = useState(false);

  const state = useMotionValue(0);

  const input = [0, 1];
  const output = [note, star];

  const figure = useTransform(state, input, output, {
    mixer: (a, b) =>
      interpolate(a, b, {
        maxSegmentLength: 0.4,
      }),
  });

  const toggleAnimation = () => {
    const current = state.get();
    const velocity = state.getVelocity();

    const target =
      velocity === 0 ? (current === 0 ? 1 : 0) : velocity > 0 ? 0 : 1;

    animate(state, target, {
      duration: 0.5,
      ease: "easeOut",
    });
  };

  const toggleSwitch = () => {
    setIsOn((prev) => {
      return !prev;
    });
    toggleAnimation();
  };

  const bgVariants = {
    on: {
      backgroundColor: twColors.rose[300],
      // transitionDuration: "8",
    },
    off: {
      backgroundColor: twColors.slate[300],
    },
  };

  const frVariants = {
    on: {
      fill: twColors.rose[500],
    },
    off: {
      fill: twColors.slate[500],
    },
  };

  return (
    <motion.div
      variants={bgVariants}
      animate={isOn ? "on" : "off"}
      onClick={toggleSwitch}
      className={cn(
        "flex w-[130px] cursor-pointer rounded-full",
        isOn ? "justify-end" : "justify-start",
      )}
    >
      <motion.div
        layout
        variants={frVariants}
        animate={isOn ? "on" : "off"}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 37,
        }}
        className={cn("m-[8px] h-10 w-10 rounded-full")}
      >
        <svg viewBox="2 2 20 20">
          {/* @ts-expect-error *** */}
          <motion.path d={figure} />
        </svg>
      </motion.div>
    </motion.div>
  );
}
