import { useState } from 'react'
import './App.css'
import { Home, PWFGame } from './routes'
import { WebSocketContext } from './components/general/WebSocketContext'

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
  const [socket, setSocket] = useState<WebSocket | null>(null)

  //TODO: custom navigation animations on new routes 
  return (
    <WebSocketContext.Provider value={{ socket, setSocket }}>
      <div className="App w-screen h-screen ">
        <RouterProvider router={router} />
      </div>
    </WebSocketContext.Provider>
  )
}

export default App
