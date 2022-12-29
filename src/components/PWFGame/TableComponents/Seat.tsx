import { useContext } from "react"
import { PWFGameTableContext, PWFGameContextInterface } from "../components/PWFTable"
import { ToolTip } from "../../baseComponents"

interface IProps {
  customStyles: string,
  index: number,
  modalVisible: boolean
}

export const Seat = ({ customStyles, index, modalVisible }: IProps) => {
  const gameTableContext = useContext<PWFGameContextInterface>(PWFGameTableContext)

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
          onFocus={() => gameTableContext.setActiveIndex(index)}
        >
          Sit Here
        </button>
        {modalVisible && <ToolTip text="This is a test" />}
      </div>

    </>
  )
}