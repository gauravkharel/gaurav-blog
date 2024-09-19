
interface TitleProps {
  props: string,
  isPrimary: boolean
}

const Title = ({ props, isPrimary }: TitleProps) => {
  return (
    <h1 className={` antialiased under first-letter:uppercase font-bold pb-2 lg:pb-4 ${isPrimary ? "text-black dark:text-white" : "dark:text-slate-200 text-slate-400"} `}>{props}</h1>
  ) 
}

export default Title