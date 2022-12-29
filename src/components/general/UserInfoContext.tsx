import { createContext } from 'react'

export interface UserInfoInterface {
  socket: WebSocket | null
  connectionId: string,
  roomId: string
}

export interface UserContextInterface {
  userInfo: UserInfoInterface
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfoInterface>>
}

export const UserContext = createContext<UserContextInterface>({
  userInfo: {
    socket: null,
    connectionId: '',
    roomId: ''
  },
  setUserInfo: () => { }
}
)
