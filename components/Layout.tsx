"use client"
import { motion } from 'framer-motion';
import { ReactNode } from 'react';
const layoutVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },

};

type Children = {
  children: ReactNode
}
//animation for later
const Layout = ({ children }: Children) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: "spring",
          damping: 5,
          stiffness: 100,
          restDelta: 0.001
        }
      }}
    >
      {children}
    </motion.div>
  );
};
export default Layout;