import React from 'react'
import ChatHistoryButton from '../components/ChatHistoryButton'
import { ChatHistoryEntry } from '../components/ChatHistoryEntry'
import { ExampleChatHistoryEntries, ChatHistoryButtons } from '../constants'

interface ChatHistoryProps {
  handleChatState: (state: "new" | "old") => void;
}

const ChatHistory = ({ handleChatState }: ChatHistoryProps) => {
  return (
    <div className='dark hidden bg-[#0F1C35] md:fixed md:inset-y-0 md:flex md:w-[260px] md:flex-col'>
      <button onClick={() => handleChatState("new")} className='py-3 px-3 ml-3 mr-3 mt-5 items-center gap-3 rounded-md hover:bg-gray-500/10 text-white cursor-pointer text-[13px] mb-2 flex-shrink-0 border border-white'>New Chat</button>
      <div id="chat-history-scroll "className='flex-col flex-1 overflow-y-auto border-b border-white/20 mt-3'>
        <div id="chat-history-list" className='flex flex-col gap-2 text-gray-100 text-sm'>
          {
            ExampleChatHistoryEntries.map((entry, index) => 
              <span onClick={() => handleChatState("old")}>
                <ChatHistoryEntry index={index} message={entry} key={index} />
              </span>
            )
          }
        </div>
      </div>
      {ChatHistoryButtons.map((button, index) => <ChatHistoryButton title={button} key={index} />)}
      <button className='py-3 px-3 ml-3 mr-3 mt-5 bg-white items-center gap-3 rounded-md hover:bg-blue-400 text-[#0F1C35] cursor-pointer text-[13px] mb-5 flex-shrink-0 border border-white'>Log Out</button>
    </div>
  )
}

export default ChatHistory