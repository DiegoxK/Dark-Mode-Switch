"use client";
import { cn } from "@/lib/utils";
import * as motion from "framer-motion/client";
import { useState } from "react";

export default function Home() {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn((prev) => {
      return !prev;
    });
  };

  const spring = {
    type: "spring",
    stiffness: 600,
    damping: 37,
  };

  return (
    <div
      onClick={toggleSwitch}
      className={cn(
        "flex w-[100px] cursor-pointer rounded-full",
        isOn ? "justify-end bg-blue-100" : "justify-start bg-red-100",
      )}
    >
      <motion.div
        layout
        transition={spring}
        className={cn(
          "m-[6px] h-10 w-10 rounded-full",
          isOn ? "bg-blue-400" : "bg-red-400",
        )}
      ></motion.div>
    </div>
  );
}
