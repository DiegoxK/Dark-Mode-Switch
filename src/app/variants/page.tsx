import { HydrateClient } from "@/trpc/server";
import * as motion from "framer-motion/client";

export default async function Home() {
  const list = { hidden: { opacity: 0.5 } };
  const item = { hidden: { x: -5 } };

  return (
    <HydrateClient>
      <motion.ul animate="hidden" variants={list}>
        <motion.li variants={item}>variant1</motion.li>
        <motion.li variants={item}>variant2</motion.li>
        <motion.li variants={item}>variant3</motion.li>
      </motion.ul>
    </HydrateClient>
  );
}
