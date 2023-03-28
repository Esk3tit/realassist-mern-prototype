import { useState } from 'react'
import Chat from './layouts/Chat'
import ChatHistory from './layouts/ChatHistory'
import Navbar from './layouts/Navbar'

function App() {

  return (
    <div className="App">
      <div></div>
      <div className="overflow-hidden w-full h-full relative flex flex-row">
        <ChatHistory />
        <div className='flex h-full flex-1 flex-col md:pl-[260px]'>
          <Navbar />
          <Chat />
        </div>
      </div>
    </div>
  )
}

export default App
