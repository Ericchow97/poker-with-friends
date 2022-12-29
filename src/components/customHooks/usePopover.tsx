import { useEffect, useRef } from "react"

interface IProps {
  setVisibility: React.Dispatch<React.SetStateAction<any>>
}

export const usePopover = ({ setVisibility }: IProps) => {
  const ref = useRef(null)

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !(ref.current as Node).contains(e.target as Node)) {
        setVisibility(null)
      }
    }

    document.body.addEventListener('mousedown', handleClick)
    return () => document.body.removeEventListener('mousedown', handleClick)
  }, [ref])

  return { ref }

}