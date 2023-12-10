import { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Chat from "tariq/components/chat"

function App() {

  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path="/chat" element={<Chat/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App

// VITE_BASE_URL=http://localhost:1337
// VITE_PROJECT_ID=f5989e08-d013-490b-9f47-1cba60ec210d
// VITE_PROJECT_KEY=8172d49a-cfd0-4238-b24d-2fea2a553edf