interface iProps {
  inputName: string
  value: number | string
  setState: React.Dispatch<React.SetStateAction<number | string>>
}

export const InputNumber = ({ inputName, value, setState }: iProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setState(parseFloat(e.target.value))

  return (
    <input
      type='number'
      name={inputName}
      className={`
        rounded border-2 border-black border-solid
        py-2 px-4
        w-full
        text-right
        focus:ring 
        focus:ring-blue-500 
        focus:ring-offset-0
        focus-visible:outline-none
        focus-visible:border-transparent
      `}
      value={value}
      onChange={handleChange}
    />
  )
}