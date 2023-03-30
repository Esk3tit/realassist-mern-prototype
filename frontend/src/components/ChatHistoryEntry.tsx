import React from 'react'

interface ChatHistoryEntryProps {
  message: String;
  index: number;
}

interface ChatHistoryEntryMessageProps {
  message: String;
}

const ChatHistoryEntryOdd = ({ message }: ChatHistoryEntryMessageProps) => {
  return (
    <div className='flex text-white bg-[#0F1C35] py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer break-all hover:pr-4 group'>
      {message}
    </div>
  )
}

const ChatHistoryEntryEven = ({ message }: ChatHistoryEntryMessageProps) => {
  return (
    <div className='flex text-white bg-[#242F46] py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer break-all hover:pr-4 group'>
      {message}
    </div>
  )
}

const ChatHistoryEntry = ({ message, index }: ChatHistoryEntryProps) => {
  return (
    index % 2 === 0 ? <ChatHistoryEntryEven message={message} /> : <ChatHistoryEntryOdd message={message} />
  )
}

export { ChatHistoryEntry, ChatHistoryEntryEven, ChatHistoryEntryOdd }