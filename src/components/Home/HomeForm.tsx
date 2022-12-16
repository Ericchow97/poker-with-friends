import { useState } from 'react'
import { Form, Input, Button } from "../base components"


export const HomeForm = () => {
  const [name, setName] = useState('')

  //TODO: Add a security key so only this site can connect to the websocket
  const openConnection = () => {
    const socket = new WebSocket('wss://qqucdvs2ji.execute-api.us-east-2.amazonaws.com/prod/')
    console.log(socket)
  }

  const handleCreate = () => {
    openConnection()

  }

  const handleJoin = () => {

  }

  return (
    <Form>
      <Input inputName='Name' value={name} setState={setName} />
      <div className="flex justify-center items-center gap-5">
        <Button text="Create room" callback={handleCreate} />
        <Button text="Join room" callback={handleJoin} />
      </div>
    </Form>
  )
}