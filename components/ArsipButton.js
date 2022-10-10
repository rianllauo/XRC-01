import React from 'react'

// eslint-disable-next-line react/display-name
const ArsipButton = React.forwardRef(({ onClick, href }, ref) => {
  return (
   <a href={href} onClick={onClick} ref={ref} className='px-3 py-2 text-center text-sm rounded-xl bg-primary hover:bg-opacity-60'> 
      {/* <Image src={plusSvg} alt="plus" width="32px" height="32px" /> */}
      Arsip
   </a>
  )
})

export default ArsipButton