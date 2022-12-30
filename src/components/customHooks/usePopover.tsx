import { useEffect, useRef } from "react"

interface IProps {
  setVisibility: React.Dispatch<React.SetStateAction<any>>
}

export const usePopover = ({ setVisibility }: IProps) => {
  const ref = useRef<HTMLDivElement  | null>(null)

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      // check parent element which is the popover activator
      if (ref.current && !ref.current.parentElement?.contains(e.target as Node)) {
        setVisibility(null)
      }
    }

    document.body.addEventListener('mousedown', handleClick)
    return () => document.body.removeEventListener('mousedown', handleClick)
  }, [ref])

  return { ref }
}