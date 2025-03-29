import { motion, useAnimation } from "framer-motion";
import { ReactNode, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { useInView } from 'react-intersection-observer';

const links = [
  { icon: <FaLinkedin size={24} />, href: "https://www.linkedin.com/in/gauravkharel/" },
  { icon: <FaGithub size={24} />, href: "https://github.com/gauravkharel" },
  { icon: <FaXTwitter size={24} />, href: "https://twitter.com/gauravdoux" },
  { icon: <FaInstagram size={24} />, href: "https://instagram.com/gauravhuh" }
]
const Socials = ({ children, href }: { children: ReactNode, href: string }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-800 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
    >
      {children}
    </a>
  );
};

const Footer = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <footer className="dark:bg-black mb-4 pt-5" ref={ref}>
      <section className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col items-center justify-between space-y-4 md:space-y-0 md:flex-row"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <motion.p 
            className="text-gray-800 dark:text-gray-300"
            variants={itemVariants}
          >
            find me on:
          </motion.p>
          
          <div className="flex space-x-6">
            {links.map((social, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
              >
                <Socials href={social.href}>
                  {social.icon}
                </Socials>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </footer>
  );
};

export default Footer;