import Title from '../Title'
import { selectedProjects } from '../../lib/mock'
import Image from 'next/image'

const Project = () => {
    return (
        <section className="py-3 b">
            <Title props="Selected Projects" isPrimary={true} />
            {selectedProjects.map(project =>
            (
                (
                <div key={project.project_title} className="flex lg:flex-row flex-col gap-1 lg:gap-5 dark:order-2 p-3 hover:dark:bg-gray-700  hover:dark:border-gray-600 hover:dark:rounded-md hover:dark:shadow-2xl  ">
                    <span className="w-[10rem] text-gray-500 dark:text-gray-200">{project.timeline}</span>
                    <div>
                        <Title isPrimary={true} props={project.project_title}></Title>
                        <span className="text-gray-600 dark:text-gray-100">{project.desc}</span>
                        <br />
                        <a href={project.project_url} className="underline py-4">Read more about it here.</a>
                        <Image className="rounded  pt-2" src={project.image_url} alt={project.project_title} width={400} height={250} />
                    </div>
                </div>
                )
            )
            )
            }
        </section>
    )
}

export default Project