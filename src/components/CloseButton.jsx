import React from 'react'

const CloseButton = () => {
  return (
    <button className='h-5 w-5 relative button-hidden hidden'>
      <span className='transform rotate-45 h-[1px] w-full left-0 top-2.5 absolute bg-light-very-dark-grayish-blue dark:bg-dark-dark-grayish-blue'></span>
      <span className='transform -rotate-45 h-[1px] w-full left-0 top-2.5 absolute bg-light-very-dark-grayish-blue dark:bg-dark-dark-grayish-blue'></span>
    </button>
  )
}

export default CloseButton