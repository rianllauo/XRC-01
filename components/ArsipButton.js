import React from 'react'

// eslint-disable-next-line react/display-name
const ArsipButton = React.forwardRef(({ onClick, href }, ref) => {
  return (
   <a href={href} onClick={onClick} ref={ref} className='p-2 flex items-center rounded-lg bg-primary z-10 overflow-hidden hover:bg-opacity-60 shadow-lg'> 
      {/* <Image src={plusSvg} alt="plus" width="32px" height="32px" /> */}
      Arsip
   </a>
  )
})

export default ArsipButton