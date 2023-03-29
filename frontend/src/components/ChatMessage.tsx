import React from 'react'

interface MessageProps {
  role: "user" | "gpt";
  message: String;
}

interface Message {
  message: String;
}

const UserMessage = ({ message }: Message) => {
  return (
    <div className='bg-[#FAF9FC] '>
      <p className='text-[#555B67] font-normal text-[13px] leading-[19px]'>
        {message}
      </p>
      <p></p>
    </div>
  )
}

const GPTMessage = ({ message }: Message) => {
  return (
    <div className='bg-[#FAF9FC] flex flex-col'>
      <p className='text-[#555B67] font-normal text-[13px] leading-[19px]'>
        {message}
      </p>
    </div>
  )
}

const ChatMessage = ({ role, message }: MessageProps) => {
  return (
    role === 'user' ? <UserMessage message={message} /> : <GPTMessage message={message} />
  )
}

export { ChatMessage, UserMessage, GPTMessage }