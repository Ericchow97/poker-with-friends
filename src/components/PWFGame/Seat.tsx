
interface IProps {
  customStyles: string
}

export const Seat = ({ customStyles }: IProps) => {
  return (
    <div className={`
      absolute
      h-16 w-16
      xl:h-20 xl:w-20
      flex
      justify-center
      items-center
      border border-red-200
      ${customStyles}
    `}>
      <p>Sit Here</p>
    </div>
  )
}