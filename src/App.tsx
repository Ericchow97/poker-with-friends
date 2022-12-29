import { useState } from 'react'
import './App.css'
import { Home, PWFGame } from './routes'
import { UserContext, UserInfoInterface } from './components/general/UserInfoContext'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: 'pwf/:gameRoomId',
    element: <PWFGame />
  }
]);

const App = () => {
  const [userInfo, setUserInfo] = useState<UserInfoInterface>({
    socket: null,
    connectionId: '',
    roomId: ''
  })

  //TODO: custom navigation animations on new routes 
  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      <div className="App w-screen h-screen ">
        <RouterProvider router={router} />
      </div>
    </UserContext.Provider>
  )
}

export default App
