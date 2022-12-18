import { createContext } from 'react'

export interface WebSocketContextInterface {
  socket: WebSocket | null
  setSocket: React.Dispatch<React.SetStateAction<WebSocket | null>>
}

export const WebSocketContext = createContext<WebSocketContextInterface>({ socket: null, setSocket: () => { } })
