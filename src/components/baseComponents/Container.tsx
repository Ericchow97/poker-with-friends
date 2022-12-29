interface IProps {
  children: JSX.Element | JSX.Element[]
  customStyles?: string
}

export const Container = ({ children, customStyles }: IProps) => {
  return (
    <div className={`flex flex-col justify-center items-center w-full h-full ${customStyles}`}>
      {children}
    </div>
  )
}