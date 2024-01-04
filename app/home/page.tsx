import Title from "../../components/Title"

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

const page = ({ }) => {
  return (
    <div>
      <div className=" py-2 ">
        <Title props="Gaurav Kharel" isPrimary={true} />
        <Title props="I write & build interfaces" isPrimary={false}></Title>
      </div>
      <div className="py-2">
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
      </div>
    </div>
  )
}

export default page