import { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Chat from "tariq/components/chat"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <h1>hello</h1>
      <BrowserRouter>
        <Routes>
          {/* <Navigate/> */}
          <Route path="/chat" element={<Chat/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
