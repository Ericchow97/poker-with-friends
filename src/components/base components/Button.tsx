
interface iProps {
  text: string
  callback: () => void
}

export const Button = ({ text, callback }: iProps) => {

  return (
    <button
      className={`
        py-2 px-4
        rounded-xl
        bg-indigo-100
        transition
        hover:bg-indigo-300
        hover:shadow-lg
        hover:scale-y-105 
        hover:-translate-y-0.5
      `}
      onClick={callback}
    >
      {text}
    </button>
  )
}