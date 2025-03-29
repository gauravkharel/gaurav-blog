import { motion } from 'framer-motion';

interface TitleProps {
  props: string;
  isPrimary: boolean;
}

const Title = ({ props, isPrimary }: TitleProps) => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`antialiased first-letter:uppercase font-bold pb-2 lg:pb-4 ${isPrimary ? "text-black dark:text-white" : "dark:text-slate-200 text-slate-400"}`}
    >
      {props}
    </motion.h1>
  );
};

export default Title;
