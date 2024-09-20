 
  import { workExperience } from '../../lib/mock'
  import Title from '../Title'
  
  const Work = () => {
      return (
          <section>
              <Title props="Work Experience" isPrimary={true} />
              <div className="flex flex-col space-y-6">
                  {workExperience.map((experience, index) => (
                      <div
                          key={experience.job_title}
                          className={`p-4 hover:bg-gray-100 hover:dark:bg-gray-700 hover:border hover:border-gray-200 hover:dark:border-gray-600 rounded-md hover:shadow-md hover:dark:shadow-2xl transition-all duration-300 ${
                              index !== workExperience.length - 1 ? 'border-b border-gray-200 dark:border-gray-700' : ''
                          }`}
                      >
                          <div className="flex flex-col lg:flex-row gap-4">
                              <span className="w-full lg:w-[160px] text-gray-500 dark:text-gray-300 flex-shrink-0">
                                  {experience.timeline}
                              </span>
                              <div className='flex-grow'>
                                  <h3 className="font-medium text-gray-900 dark:text-gray-100">{experience.job_title}</h3>
                                  <span className="text-gray-700 dark:text-gray-200 block mb-2">
                                      {experience.company}, {experience.location}
                                  </span>
                                  <p className="text-gray-600 dark:text-gray-300 mb-3">
                                      {experience.description}
                                  </p>
                                  <div>
                                      <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Technologies Used:</h4>
                                      <div className="flex flex-wrap gap-2">
                                          {experience.tech_used.map((tech, index) => (
                                              <span key={index} className="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-md text-sm">
                                                  {tech}
                                              </span>
                                          ))}
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  ))}
              </div>
          </section>
      )
  }
  
  export default Work