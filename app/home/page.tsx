import Image from "next/image"
import Title from "../../components/Title"
import profile from '../../public/bg.jpg'

interface pageProps {

}

const techstacks = [
  { name: 'JavaScript', href: '' },
  { name: 'TypeScript', href: '' },
  { name: 'React', href: '' },
  { name: 'Next.js', href: '' },
  { name: 'Redux Toolkit', href: '' },
  { name: `TanStack Query`, href: '' },
  { name: `Node.js`, href: '' },
  { name: 'Express', href: '' },
]

const selectedProjects = [
  {
    timeline: '2021 - 2022',
    project_title: 'Tathya',
    desc: 'I currently work at Bitrefill, mainly focusing on search & discovery.I also lead design & development of the design system.',
    project_url: "current.com",
    image_url: profile
  },
  {
    timeline: '2021 - 2022',
    project_title: 'Tathya',
    desc: 'I currently work at Bitrefill, mainly focusing on search & discovery.I also lead design & development of the design system.',
    project_url: "current.com",
    image_url: profile 
  },
  {
    timeline: '2021 - 2022',
    project_title: 'Tathya',
    desc: 'I currently work at Bitrefill, mainly focusing on search & discovery.I also lead design & development of the design system.',
    project_url: "current.com",
    image_url: profile
  }
]

const page = ({ }) => {
  return (
    <div className="px-[120px]">
      <section className="py-3">
        <Title props="Gaurav Kharel" isPrimary={true} />
        <Title props="I write & build interfaces" isPrimary={false}></Title>
      </section>
      <section className="py-3">
        <Title props="Tech Stacks" isPrimary={true} />
        <ul className="flex flex-row gap-4 flex-wrap">
          {techstacks.map((stack) => {
            return (
              <li key={stack.name} className="rounded-2xl border-slate-100 bg-slate-50 hover:bg-slate-100 text-slate-600 dark:text-sky-300 dark:border-sky-500/15 dark:bg-sky-500/10 dark:hover:bg-slate-600">
                <p className="font-normal text-lg px-4 py-2  ">{stack.name}</p>
              </li>
            )
          })}
        </ul>
      </section>

      <section className="text-xl py-3">
        <Title props="Selected Projects" isPrimary={true} />

        {selectedProjects.map(project =>
        (
          (<div key={project.project_title} className="flex gap-4 py-2">
            <span>{project.timeline}</span>
            <div>
              <Title isPrimary={true} props={project.project_title}></Title>
              <span className="text-gray-600">{project.desc}</span>
              <br />
              <a href={project.project_url} className="underline py-4">Read more about it here.</a>
              <Image className="rounded" src={project.image_url} alt={project.project_title} width={400} height={250} />
            </div>
          </div>)
        )
        )
        }
      </section>

      <section>
        <Title props="Selected articles" isPrimary={true} />
        

      </section>

    </div>
  )
}

export default page