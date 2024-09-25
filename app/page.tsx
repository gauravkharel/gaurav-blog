import Title from "../components/Title"
import Footer from "../components/Footer";
import Work from "../components/home/Work";
import Project from "../components/home/Project";

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

const page = ({ }) => {
  return (
    <div className="px-8 md:px-8 lg:px-[50px]">
      <section className="py-3">
        <Title props="Gaurav Kharel" isPrimary={true} />
        <span className="relative text-gray-500 dark:text-gray-200 font-medium bottom-2 lg:bottom-4">I design and build interfaces.</span>
      </section>
      <section className="py-3 hidden">
        <Title props="Tech Stacks" isPrimary={true} />
        <ul className="flex flex-row flex-wrap lg:gap-4 gap-2">
          {techstacks.map((stack) => {
            return (
              <li key={stack.name} className="rounded-2xl border-slate-100 bg-slate-50 hover:bg-slate-100 text-slate-600 dark:text-sky-300 dark:border-sky-500/15 dark:bg-sky-500/10 dark:hover:bg-slate-600">
                <p className="font-normal  px-4 py-2  ">{stack.name}</p>
              </li>
            )
          })}
        </ul>
      </section>
        <Work />
        <Project />
        <Footer />
    </div>
  )
}

export default page



