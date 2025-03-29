"use client"
import Title from "../../components/Title"
import Footer from "../../components/Footer";
import Project from "../../components/home/Project";
import Showcase from "../../components/home/Showcase";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useState, useEffect } from "react";

const MotionLi = motion.li;
const MotionUl = motion.ul;

const techstacks = [
  { name: 'Figma', href: '' },
  { name: 'TypeScript', href: '' },
  { name: 'React', href: '' },
  { name: 'JavaScript', href: '' },
  // { name: 'Rust', href: '' }
];

const getColorForName = (name: string): { bg: string; text: string } => {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const hue = Math.abs(hash % 360);
  const saturation = 70 + (hash % 15);
  const lightness = 80 + (hash % 5);
  return {
    bg: `hsl(${hue}, ${saturation}%, ${lightness}%)`,
    text: `hsl(${hue}, ${saturation}%, 30%)`
  };
};

const words = ["interfaces", "dashboards", "products", "experiences"];

const Home = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="px-8 md:px-8 lg:px-[50px]">
      <section className="py-3">
        <Title props="Gaurav Kharel" isPrimary={true} />
        <span className="relative text-gray-500 dark:text-gray-200 font-medium bottom-2 lg:bottom-4">
          I design and build{' '}
          <motion.span 
            key={index}
            className="inline-block"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            {words[index]}
          </motion.span>
          
        </span>
      </section>
      <section className="py-3 ">
        <Title props="Tools I Use" isPrimary={true} />
        <MotionUl
          className="flex flex-row flex-wrap lg:gap-4 gap-2"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.08,
                delayChildren: 0.2
              }
            }
          }}
        >
          {techstacks.map((stack) => {
            const colors = getColorForName(stack.name);
            const rotateX = useMotionValue(0);
            const rotateY = useMotionValue(0);
            const transform = useMotionTemplate`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

            return (
              <MotionLi
                key={stack.name}
                style={{
                  backgroundColor: colors.bg,
                  color: colors.text,
                  rotateX,
                  rotateY,
                  transform
                }}
                className="rounded-2xl border cursor-pointer relative dark:text-sky-300 dark:border-sky-500/15 dark:bg-sky-500/10 dark:hover:bg-slate-600"
                whileHover={{
                  scale: 1.05,
                  zIndex: 1,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                onHoverStart={() => {
                  rotateX.set(10);
                  rotateY.set(-5);
                }}
                onHoverEnd={() => {
                  rotateX.set(0);
                  rotateY.set(0);
                }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <motion.p
                  className="font-normal px-4 py-2"
                  whileHover={{ scale: 1.05 }}
                >
                  {stack.name}
                  <motion.span
                    className="absolute inset-0 rounded-2xl shadow-lg opacity-0"
                    style={{
                      background: useMotionTemplate`radial-gradient(800px circle at ${rotateX}px ${rotateY}px, rgba(255,255,255,0.15), transparent 80%)`
                    }}
                  />
                </motion.p>
              </MotionLi>
            );
          })}
        </MotionUl>
      </section>
      <Showcase />
      <Project />
      <Footer />
    </div>
  );
};

export default Home;
