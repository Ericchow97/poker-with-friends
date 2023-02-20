import { useState, useContext } from "react"
import { UserContext } from "../../general/UserInfoContext"
import { InputNumber, Button } from "../../baseComponents"

export const SeatForm = () => {
  const [stack, setStack] = useState<number | string>('')
  const { userInfo } = useContext(UserContext)

  console.log(userInfo)

  // console.log(socket)


  const handleSubmit = () => {

  }

  return (
    <>
      <div className="mb-5">
        <h3 className="text-left mb-2">Chip Stack</h3>
        <InputNumber
          inputName="chips"
          value={stack}
          setState={setStack}
        />
      </div>
      <Button text="Join" callback={handleSubmit} customStyles={'w-full'} />
    </>
  )
}