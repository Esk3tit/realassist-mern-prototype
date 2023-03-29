import React from 'react'
import arrow from '../assets/exampleprompt.svg'

interface ExamplePromptProps {
  text: String;
}

const ExamplePrompt = ({ text }: ExamplePromptProps) => {
  return (
    <div className='flex justify-between items-center rounded-md bg-white w-[450px] h-[65px] py-3 px-3 mx-2'>
      <h3 className='text-[14px] leading-[18px] font-bold'>{text}</h3>
      <img src={arrow} alt="arrow" className='w-6 h-6 object-contain' />
    </div>
  )
}

export default ExamplePrompt