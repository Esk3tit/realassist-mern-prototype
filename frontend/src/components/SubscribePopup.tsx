import React from 'react'

interface PopupProps {
  handleClose: () => void;
}

const SubscribePopup = ({ handleClose }: PopupProps) => {
  return (
    <div className='relative drop-shadow-md rounded-3xl border bg-[#262484] w-[263px] pt-6 pb-1'>
      <span id='close-icon' className='cursor-pointer fixed w-[32px] text-[20px] text-[#667085] top-0 right-0 text-center rounded-full z-1 bg-white h-[32px]' onClick={handleClose}>x</span>
      <div className='flex flex-col z-1 items-center'>
        <h1 className='text-white font-bold px-3 text-[26px] leading-[34px]'>Subscribe and Enjoy Full Features</h1>
        <div className='bg-white z-1 mt-5 px-3 pb-5 rounded-b-3xl'>
          <p className='text-[#667085] text-[14px] leading-[18px] mt-6 mb-6'>With subscription, get over 500,000 words every month</p>
          <button className='mt-3 py-[8px] px-[24px] text-white bg-[#443DF6] rounded-md w-[227px] h-[48px]'>Subscribe Now</button>
        </div>
      </div>
    </div>
  )
}

export default SubscribePopup