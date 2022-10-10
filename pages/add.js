import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import arrowLeft from "../public/arrow-left.svg"

const AddNote = () => {
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')
  const router = useRouter();

  const saveNote = async(e) => {
    e.preventDefault();
    const catatan = {title, note};
    console.log(catatan)

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
    <div className='max-w-md mx-auto px-4 py-5'>
        <Link href="/">
          <a> <Image src={arrowLeft} alt='back' width="26px" height="26px"/></a>
        </Link>


        <form onSubmit={saveNote}>
          <div>
            <label>title</label>
            <div>
              <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Judul' />
            </div>
          </div>

          <div>
            <label>Note</label>
            <div>
              <input type="text" value={note} onChange={(e) => setNote(e.target.value)} placeholder='masukan catatan kamu' />
            </div>
          </div>

          <div>
            <div>
              <button>Simpan</button>
            </div>
          </div>
        </form>

    </div>
  )
}

export default AddNote