import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import arrowLeft from "../public/arrow-left.svg"

const AddNote = () => {
  return (
    <div className='max-w-md mx-auto px-4 py-5'>
      <div>
        <Link href="/">
          <a> <Image src={arrowLeft} alt='back' width="26px" height="26px"/></a>
        </Link>
      </div>
    </div>
  )
}

export default AddNote