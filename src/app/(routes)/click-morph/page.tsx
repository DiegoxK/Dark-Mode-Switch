"use client";

import { animate, useMotionValue, useTransform } from "framer-motion";
import { interpolate } from "flubber";
import { heart, star } from "../morphing/paths";
import * as motion from "framer-motion/client";

export default function FigureAnimation() {
  const state = useMotionValue(0);

  const input = [0, 1];
  const output = [heart, star];

  // Create the figure transformation using flubber's interpolate function
  const figure = useTransform(state, input, output, {
    mixer: (a, b) =>
      interpolate(a, b, {
        maxSegmentLength: 0.1,
      }),
  });

  // Function to toggle animation state
  const toggleAnimation = () => {
    const current = state.get();
    const velocity = state.getVelocity();

    // Determine target state based on velocity or current state
    const target =
      velocity === 0 ? (current === 0 ? 1 : 0) : velocity > 0 ? 0 : 1;

    animate(state, target, {
      duration: 0.4,
      ease: "circInOut",
    });
  };

  return (
    <div>
      <svg
        width="200"
        height="200"
        viewBox="2 2 20 20"
        onClick={toggleAnimation}
      >
        {/* @ts-expect-error *** */}
        <motion.path fill="#13944f" d={figure} />
      </svg>
    </div>
  );
}
