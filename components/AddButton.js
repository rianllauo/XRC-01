import React from 'react'
import Image from 'next/image'
import plusSvg from '../public/plus.svg'

// eslint-disable-next-line react/display-name
const AddButton = React.forwardRef(({ onClick, href }, ref) => {
  return (
        <a href={href} onClick={onClick} ref={ref} className='px-3 text-center py-2 text-sm rounded-xl bg-primary hover:bg-opacity-60 '> 
            {/* <Image src={plusSvg} alt="plus" width="32px" height="32px" /> */}
            Buat Catatan
        </a>
  )
})


export default AddButton