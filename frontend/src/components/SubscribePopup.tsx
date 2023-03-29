import React from 'react'

interface PopupProps {
  handleClose: () => void;
}

const SubscribePopup = ({ handleClose }: PopupProps) => {
  return (
    <div className='relative z-1 drop-shadow-md rounded-3xl border bg-white w-[263px] py-6 px-3'>
      <span id='close-icon' className='cursor-pointer fixed w-[32px] bg-white h-[32px]' onClick={handleClose}>x</span>
      <div className='flex flex-col items-center'>
        <h1 className='bg-[#262484] text-white font-bold text-[26px] leading-[34px]'>Subscribe and Enjoy Full Features</h1>
        <p className='text-[#667085] text-[14px] leading-[18px] mt-6 mb-6'>With subscription, get over 500,000 words every month</p>
        <button className='mt-3 py-[8px] px-[24px] text-white bg-[#443DF6] rounded-md w-[227px] h-[48px]'>Subscribe Now</button>
      </div>
    </div>
  )
}

export default SubscribePopup