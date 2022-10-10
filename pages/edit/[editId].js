import React from 'react'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import arrowLeft from "../../public/arrow-left.svg"

const EditNoteId = () => {
  // const [dataNote, setDataNote] = useState('')
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')
  const [archive, setArchive] = useState()
  const router = useRouter();
  const {editId} = router.query;
  console.log({editId})

  useEffect(() => {
    const getNoteById = async () => {
      const response = await fetch(`http://localhost:5000/note/${editId}`);
      const data = await response.json();
      setTitle(data.title);
      setNote(data.note);
      setArchive(data.archive);
    }
    getNoteById();
  }, [editId]);

  const updateNote = async(e) => {
    e.preventDefault();
    const catatan = {title, note, archive};
    console.log(catatan)

    await fetch(`http://localhost:5000/note/${editId}`, {
      method: "PUT",
      body: JSON.stringify(catatan),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    router.push("/");
  }

  const archiveNote = (id) => {
   setArchive(true) & updateNote();
   
  }

  const deleteNote = async(id) =>{
    await fetch(`http://localhost:5000/note/${id}` , {
      method : "DELETE",
      headers : {
        'Content-Type' : 'aplication/json'
      }
    });
    router.push('/')
  }

  return (
    <div className='max-w-md mx-auto px-4 py-5'>
        <Link href="/">
          <a> <Image src={arrowLeft} alt='back' width="26px" height="26px"/></a>
        </Link>

        <div className='absolute top-0 right-[80px] pt-4 pr-5'>
          <button className='px-3 py-2 bg-[#CA3B3B] text-sm rounded-md' onClick={() => deleteNote(editId)}>Hapus</button>
        </div>

        <div className='absolute top-0 right-[160px] pt-4 pr-5'>
          <button className='px-3 py-2 bg-[#CA3B3B] text-sm rounded-md' onClick={() => archiveNote(editId)}>Arsipkan</button>
        </div>

        <form className='mt-8' onSubmit={updateNote}>
            <div className='py-2'>
              <input className='bg-background px-2 py-1 text-xl w-full font-semibold outline-none' type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Judul' />
            </div>

          
            <div className='py-2'>
              <textarea className='bg-background px-2 py-1 text-base text-[#999] font-normal w-full h-screen outline-none' type="text" value={note} onChange={(e) => setNote(e.target.value)} placeholder='masukan catatan kamu' />
            </div>
          

          
            <div className='absolute top-0 right-0 pt-4 pr-5'>
              <button className='px-3 py-2 bg-primary text-sm rounded-md'>Simpan</button>
            </div>
        </form>

    </div>
  )
}

export default EditNoteId