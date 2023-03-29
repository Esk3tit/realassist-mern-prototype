import React from 'react'

interface ChatHistoryButtonProps {
  title: String;
}

const ChatHistoryButton = ({ title }: ChatHistoryButtonProps) => {
  return (
    <a className='flex py-3 px-6 items-center gap-3 rounded-md hover:bg-gray-500/10 text-white font-semibold cursor-pointer text-[13px]'>
      {title}
    </a>
  )
}

export default ChatHistoryButton