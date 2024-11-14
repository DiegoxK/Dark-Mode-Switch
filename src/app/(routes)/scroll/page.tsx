import * as motion from "framer-motion/client";

export default async function Home() {
  return (
    <div>
      <div className="flex h-[600px] flex-col items-center justify-center">
        Hello world 1!
      </div>
      <motion.div
        className="flex h-[400px] flex-col items-center justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <div className="h-[200px] w-[200px] rounded-full bg-gradient-to-br from-cyan-500 to-blue-500"></div>
      </motion.div>
    </div>
  );
}
