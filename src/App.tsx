import { useState } from 'react'
import './App.css'
import { Home } from './pages/Home'
import { WebSocketContext } from './components/general/WebSocketContext'


const App = () => {
  const [socket, setSocket] = useState<WebSocket | null>(null)

  return (
    <WebSocketContext.Provider value={{ socket, setSocket }}>
      <div className="App w-screen h-screen ">
        <Home />
      </div>
    </WebSocketContext.Provider>
  )
}

export default App
