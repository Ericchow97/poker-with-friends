import { createContext } from 'react'

export interface UserInfoInterface {
  socket: WebSocket | null
  roomId: string
  connectionId: string
  isHost: boolean
}

export interface UserContextInterface {
  userInfo: UserInfoInterface
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfoInterface>>
}

export const UserContextInitialValue: UserInfoInterface = {
  socket: null,
  connectionId: '',
  roomId: '',
  isHost: false
}

export const UserContext = createContext<UserContextInterface>({
  userInfo: UserContextInitialValue,
  setUserInfo: () => { }
}
)
