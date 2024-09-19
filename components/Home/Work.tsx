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
                    >
                        <div
                            className={`flex flex-col lg:flex-row gap-4 dark:order-2 p-4 hover:dark:bg-gray-700 hover:dark:border-gray-600 hover:dark:rounded-md hover:dark:shadow-2xl transition-all duration-300 ${index !== workExperience.length - 1 ? 'border-b dark:border-gray-700' : ''
                                }`}
                        >
                            <span className="w-full lg:w-[160px] text-gray-500 dark:text-gray-300 flex-shrink-0">
                                {experience.timeline}
                            </span>
                            <div className='flex-grow'>
                                <h3 className="font-medium">{experience.job_title}</h3>
                                <span className="text-gray-700 dark:text-gray-200 block mb-2">
                                    {experience.company}, {experience.location}
                                </span>
                                <ul className="list-disc list-outside ml-5 text-gray-500 dark:text-gray-300 space-y-1">
                                    {experience.responsibilities.map((responsibility, index) => (
                                        <li key={index}>{responsibility}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Work