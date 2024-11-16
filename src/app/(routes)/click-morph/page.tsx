"use client";

import * as motion from "framer-motion/client";
import { heart, star } from "../morphing/paths";
import {
  animate,
  cubicBezier,
  easeIn,
  MotionValue,
  useMotionValue,
  useTransform,
} from "framer-motion";

import { interpolate } from "flubber";
import { useEffect, useState } from "react";

export default function FigureAnimation() {
  const state = useMotionValue(0);

  const input = [0, 1];
  const output = [heart, star];

  const figure = useTransform(state, input, output, {
    mixer: (a, b) =>
      interpolate(a, b, {
        maxSegmentLength: 0.1,
      }),
  });

  return (
    <div>
      <svg
        onClick={() => {
          const velocity = state.getVelocity();

          if (!velocity) {
            if (state.get() === 0) {
              animate(state, 1, {
                duration: 0.8,
                ease: "easeInOut",
              });
            } else if (state.get() === 1) {
              animate(state, 0, {
                duration: 0.8,
                ease: "easeInOut",
              });
            }
          }
          {
            if (velocity > 0) {
              animate(state, 0, {
                duration: 0.8,
                ease: "easeInOut",
              });
            } else if (velocity < 0) {
              animate(state, 1, {
                duration: 0.8,
                ease: "easeInOut",
              });
            }
          }
        }}
        width="200"
        height="200"
        viewBox="2 2 20 20"
      >
        <motion.path fill="#13944f" d={figure} />
      </svg>
    </div>
  );
}
