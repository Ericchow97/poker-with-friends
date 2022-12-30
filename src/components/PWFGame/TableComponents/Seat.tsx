import { useContext } from "react"
import { PWFGameTableContext, PWFGameContextInterface } from "../components/PWFTable"
import { SeatForm } from "./SeatForm"
import { Popover } from "../../baseComponents"

interface IProps {
  customStyles: string,
  index: number,
  modalVisible: boolean
}

export const Seat = ({ customStyles, index, modalVisible }: IProps) => {
  const { setActiveIndex } = useContext<PWFGameContextInterface>(PWFGameTableContext)

  return (
    <>
      <div
        className={`
          absolute
          h-16 w-16
          xl:h-20 xl:w-20
          flex
          justify-center
          items-center
          border border-dashed border-red-200
          ${customStyles}
        `}
      >
        <button
          className={`
            w-full h-full
            bg-transparent
            relative
          `}
          onFocus={() => setActiveIndex(index)}
        >
          Sit Here
        </button>
        {modalVisible && <Popover setVisibility={setActiveIndex} content={<SeatForm />} />}
      </div>
    </>
  )
}