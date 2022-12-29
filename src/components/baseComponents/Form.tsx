interface iProps {
  children: JSX.Element[]
}
export const Form = ({ children }: iProps) => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-5">
      {children}
    </div>
  )
}
