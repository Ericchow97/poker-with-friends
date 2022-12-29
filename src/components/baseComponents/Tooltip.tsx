interface IProps {
  text: string
}

export const ToolTip = ({ text }: IProps) => {
  return (
    <div className="absolute bg-white bottom-full">
      {text}
      <div className="w-0 h-0 border-20 border-b-transparent border-x-transparent mx-auto"></div>

    </div>
  )
}