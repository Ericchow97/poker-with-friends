import { useState, useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { Form, Input, Button } from "../baseComponents"
import { UserContext } from '../general/UserInfoContext'
import { WebSocketMessage } from '../../../types'

export const HomeForm = () => {
  const [name, setName] = useState('')
  const [roomId, setRoomId] = useState('')
  const navigate = useNavigate()
  const { setUserInfo } = useContext(UserContext)

  //TODO: Add a security key so only this site can connect to the websocket
  const handleSubmit = (type: "Create" | "Join") => {
    //TODO: Add Error Messages
    // preform validation
    if (!name) return
    if (type === 'Join' && !roomId) return

    const socket = new WebSocket('wss://qqucdvs2ji.execute-api.us-east-2.amazonaws.com/prod/')
    console.log(socket)
    socket.onopen = (event) => {
      console.log(event)
      const data = {
        action: "CreateJoinRoom",
        data: {
          name: name,
          roomId: roomId,
          type: type
        }
      }

      socket.send(JSON.stringify(data))
    }

    socket.onmessage = (event) => {
      const message = JSON.parse(event.data) as WebSocketMessage
      console.log(message)

      if (message.status === 200) {
        // store user data in state
        setUserInfo({
          socket: socket,
          connectionId: message.data.connectionId,
          roomId: message.data.roomId,
          isHost: message.data.isHost
        })
        return navigate(`/PWF/${message.data.roomId}`)
      }
      //TODO: handle Errors "invalidRoom" & "Server Error"
      return
    }

    socket.onerror = (message) => {
      console.log(message)
    }
  }

  // TODO: Loading when create a room 
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