import { useState, useContext } from 'react'
import { Form, Input, Button } from "../base components"
import { WebSocketContext } from '../general/WebSocketContext'


export const HomeForm = () => {
  const [name, setName] = useState('')
  const [roomId, setRoomId] = useState('')
  const { setSocket } = useContext(WebSocketContext)

  //TODO: Add a security key so only this site can connect to the websocket
  const handleSubmit = (type: "Create" | "Join") => {
    //TODO: Add Error Messages
    // preform validation
    if (!name) return
    if (type === 'Join' && !roomId) return
    const socket = new WebSocket('wss://qqucdvs2ji.execute-api.us-east-2.amazonaws.com/prod/')
    console.log(socket)
    socket.onopen = (event) => {
      setSocket(socket)
      console.log(event)
      const data = {
        action: type,
        data: {
          name: name,
          roomId: roomId
        }
      }
      socket.send(JSON.stringify(data))
    }
  }



  return (
    <Form>
      <Input inputName='Name' value={name} setState={setName} />
      <Input inputName='Room ID' value={roomId} setState={setRoomId} />
      <div className="flex justify-center items-center gap-5">
        <Button text="Create room" callback={() => handleSubmit('Create')} />
        <Button text="Join room" callback={() => handleSubmit('Join')} />
      </div>
    </Form>
  )
}