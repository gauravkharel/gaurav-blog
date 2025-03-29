import { motion } from "framer-motion";
import Title from '../Title'
import { selectedProjects } from '../../lib/mock'
import Image from 'next/image'

const Project = () => {
  return (
    <section className="py-3">
      <Title props="Selected Projects" isPrimary={true} />
      <div>
        {selectedProjects.map((project, index) => (
          <motion.div
            key={project.project_title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="p-4 rounded-md hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors"
          >
            <div className="flex lg:flex-row flex-col gap-5 p-3">
              <motion.span 
                className="w-[10rem] text-gray-500 dark:text-gray-200 block lg:mb-0 mb-2"
                whileHover={{ x: 3 }}
              >
                {project.timeline}
              </motion.span>

              <div className="flex-1 space-y-3">
                <div className="space-y-2">
                  <Title isPrimary={true} props={project.project_title} />
                  <motion.p className="text-gray-600 dark:text-gray-100 leading-relaxed">
                    {project.desc}
                  </motion.p>
                </div>

                <motion.div
                  className="relative overflow-hidden rounded-lg group"
                  whileHover={{ 
                    scale: 1.01,
                    transition: { type: "spring", stiffness: 300, damping: 10 }
                  }}
                >
                  <Image 
                    className="rounded-lg"
                    src={project.image_url} 
                    alt={project.project_title} 
                    width={600} 
                    height={400}
                    quality={100}
                  />
                  
                  {/* Fixed Overlay Implementation */}
                  <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <a
                      href={project.project_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full px-4 py-3 text-center"
                    >
                      <span className="font-medium text-lg text-white">
                        Read more about this project
                      </span>
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Project