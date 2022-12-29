interface iProps {
  inputName: string
  value: string
  setState:React.Dispatch<React.SetStateAction<string>>
}

export const Input = ({inputName, value, setState}: iProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setState(e.target.value)

  return (
    <input
      type='text'
      name={inputName}
      className={`
        rounded border-2 border-black border-solid
        py-2 px-4
        w-full
        focus:ring 
        focus:ring-blue-500 
        focus:ring-offset-0
        focus-visible:outline-none
        focus-visible:border-transparent
      `}
      placeholder={inputName}
      value={value}
      onChange={handleChange}
    />
  )
}