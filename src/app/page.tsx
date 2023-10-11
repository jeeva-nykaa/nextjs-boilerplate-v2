'use client';

import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="flex h-full items-center justify-center">
      <motion.div
        className="flex h-180 w-180 items-center justify-center rounded-xl bg-white p-2"
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ['0%', '0%', '50%', '50%', '0%'],
        }}
        transition={{
          duration: 2,
          ease: 'easeInOut',
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
      >
        <h1>Welcome To Disha</h1>
      </motion.div>
    </main>
  );
}
