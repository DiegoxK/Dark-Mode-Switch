import * as motion from "framer-motion/client";

export default async function Home() {
  return (
    <motion.div
      className="h-[200px] w-[200px] rounded-full bg-gradient-to-br from-cyan-500 to-blue-500"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 1.1 }}
      drag="x"
      dragConstraints={{ left: -100, right: 100 }}
    />
  );
}
