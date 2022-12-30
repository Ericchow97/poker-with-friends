import { usePopover } from "../customHooks/usePopover"

interface IProps {
  content: JSX.Element,
  setVisibility: React.Dispatch<React.SetStateAction<any>>

}

export const Popover = ({ content, setVisibility }: IProps) => {

  const { ref } = usePopover({ setVisibility })
  return (
    <div ref={ref} className="absolute bottom-full w-52 z-10">
      <div className="bg-white border rounded-md p-4">
        {content}
      </div>
      <div className="w-0 h-0 border-10 border-white border-b-transparent border-x-transparent mx-auto"></div>
    </div>
  )
}