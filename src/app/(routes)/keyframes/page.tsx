import * as motion from "framer-motion/client";

export default async function Home() {
  return (
    <motion.div
      className="h-[200px] w-[200px] rounded-full bg-gradient-to-br from-cyan-500 to-blue-500"
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        transition: {
          duration: 3,
          // times: [0, 0.1, 0.8, 0.9, 1],
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        },
      }}
    />
  );
}
