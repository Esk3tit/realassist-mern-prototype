import React from 'react'
import copy from '../assets/copy.svg'

interface MessageProps {
  role: String;
  message: String;
  timestamp: String;
}

interface Message {
  message: String;
  timestamp: String;
}

const UserMessage = ({ message, timestamp }: Message) => {
  return (
    <div className='bg-[#FAF9FC] py-3 px-5 flex flex-col min-h-[75px] border'>
      <p className='text-[#555B67] font-normal text-[13px] leading-[19px]'>
        {message}
      </p>
    </div>
  )
}

const GPTMessage = ({ message, timestamp }: Message) => {
  return (
    <div className='bg-[#FAF9FC] py-3 px-5 flex flex-col min-h-[75px] border'>
      <div className='flex flex-row'>
        <p className='text-[#555B67] font-normal text-[13px] leading-[19px] mr-3'>
          {message}
        </p>
        <img src={copy} alt='copy' />
      </div>
      <p className='text-[#9BA1AE] text-[10px] leading-[11px] mt-2'>
        {timestamp}
      </p>
    </div>
  )
}

const ChatMessage = ({ role, message, timestamp }: MessageProps) => {
  return (
    role === 'user' ? <UserMessage message={message} timestamp={timestamp} /> : <GPTMessage message={message} timestamp={timestamp} />
  )
}

export { ChatMessage, UserMessage, GPTMessage }