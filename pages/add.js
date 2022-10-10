import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import arrowLeft from "../public/arrow-left.svg"

const AddNote = () => {
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')
  const [archive, setArchive] = useState(false);
  const router = useRouter();


  const saveNote = async(e) => {
    e.preventDefault();
    const catatan = {title, note, archive};

    await fetch('http://localhost:5000/note', {
      method: "POST",
      body: JSON.stringify(catatan),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    router.push("/");
  }

  return (
    <div className='max-w-md mx-auto px-4 py-5 relative '>
        <Link href="/">
          <a> <Image src={arrowLeft} alt='back' width="20px" height="20px"/></a>
        </Link>


        <form className='mt-8' onSubmit={saveNote}>
            {/* <label>title</label> */}
            <div className='py-2'>
              <input className='bg-background px-2 py-1 text-xl w-full font-semibold outline-none' type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Judul' />
            </div>

            {/* <label>Note</label> */}
            <div className='py-2'>
              <textarea className='bg-background px-2 py-1 text-base  text-[#999] font-normal w-full h-screen outline-none' type="text" value={note} onChange={(e) => setNote(e.target.value)} placeholder='masukan catatan kamu' />
            </div>
            <div className='absolute top-0 right-0 pt-4 pr-5'>
              <button className='px-3 py-2 border text-sm border-[#FFF] rounded-md'>Simpan</button>
            </div>
        </form>

    </div>
  )
}

export default AddNote