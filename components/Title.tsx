
interface TitleProps {
  props: string,
  isPrimary: boolean
}

const Title = ({props, isPrimary}: TitleProps) => {
  return (
    <h1 className={` antialiased first-letter:uppercase ${isPrimary ? "text-2xl text-black": "text-xl text-slate-400" }`}>{props}</h1>
  )
  }

export default Title