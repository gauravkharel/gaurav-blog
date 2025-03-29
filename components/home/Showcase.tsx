import { motion } from "framer-motion";
import Title from '../Title';
import Image from 'next/image';
import jsoninput from '../../public/json-inputt.png'
import igv from '../../public/client_landing.jpg'
import loginproshore from '../../public/login_form_bootcamp.jpg'
import priv from '../../public/priv.jpg'
import jobtrack from '../../public/jobtrack.png'
const projects = [
  {
    image_url: jsoninput,
    name: 'JSON Input to Form Generator',
    desc: 'A simple tool to convert JSON input to form',
    date: '2023',
    width: 'col-span-2 md:col-span-1 lg:col-span-2'
  },
  {
    image_url: igv,
    name: 'iGV Client Landing Page',
    desc: 'Landing page for iGV client',
    date: '2025',
    width: 'col-span-1'
  },

  {
    image_url: priv,
    name: 'Priv Client Landing Page',
    desc: 'A decentralized platform for identity verification.',
    date: '2025',
    width: 'col-span-1'
  },
  {
    image_url: igv,
    name: 'IGV Client Landing Page',
    desc: 'Landing page for IGV client',
    date: '2025',
    width: 'col-span-2 md:col-span-1 lg:col-span-2'
  },
  {
    image_url: jobtrack,
    name: 'Track Job',
    desc: 'To track your job applications',
    date: '2023',
    width: 'col-span-2'
  },
  {
    image_url: loginproshore,
    name: 'A simple login/sign up form',
    desc: 'Designed it during my bootcamp',
    date: '2022',
    width: 'col-span-1'
  },
];


const Showcase = () => {
  return (
    <section className="py-3">
      <Title props="My Work" isPrimary={true} />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 px-4">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className={`relative ${project.width} h-96 rounded-xl overflow-hidden group`}
          >
            {/* Image Container - Removed grayscale effect */}
            <div className="relative h-full w-full">
              <Image
                src={project.image_url}
                alt={project.name}
                fill
                className="object-cover" // Removed grayscale classes
              />

              {/* Overlay - Keep all existing hover effects */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end">
                <div className="space-y-1 text-white">
                  <h3 className="font-semibold">{project.name}</h3>
                  <p className="font-normal text-gray-200">{project.desc}</p>
                  <span className="font-light text-gray-300">{project.date}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};


export default Showcase;