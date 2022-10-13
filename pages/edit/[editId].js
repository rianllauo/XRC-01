import React from 'react'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import arrowLeft from "/public/arrow-left.svg"
import trash from "/public/trash-2.svg"
import bookmark from "/public/bookmark.svg"
import Swal from 'sweetalert2'

const EditNoteId = () => {
  // const [dataNote, setDataNote] = useState('')
  const [title, setTitle] = useState('')
  const [textNote, setNote] = useState('')
  const [archive, setArchive] = useState()
  const router = useRouter();
  const {editId} = router.query;

  useEffect(() => {
    const getNoteById = async () => {
      const response = await fetch(`https://6347b41a0484786c6e8665bf.mockapi.io/notes/${editId}`);
      const data = await response.json();
      setTitle(data.title);
      setNote(data.textNote);
      setArchive(data.archive);
    }
    getNoteById();
  }, [editId]);

  const updateNote = async(e) => {
    e.preventDefault();
    const catatan = {title, textNote, archive};

    await fetch(`https://6347b41a0484786c6e8665bf.mockapi.io/notes/${editId}`, {
      method: "PUT",
      body: JSON.stringify(catatan),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    router.push("/");
    
  }

  const archiveNote = (id) => {
   setArchive(true) ;
   
  }

  const deleteNote = async(id) =>{
    await fetch(`https://6347b41a0484786c6e8665bf.mockapi.io/notes/${id}` , {
    method : "DELETE",
    headers : {
      'Content-Type' : 'aplication/json'
      }
    });
    router.push('/')
    Swal.fire({
      position: 'bottom-end',
      html : '<p>Catatan di hapus</p>',
      width: '230px',
      padding: '0 0 14px 0',
      showConfirmButton: false,
      timer: 1500
    });
  }  

  return (
    <div className='max-w-md mx-auto px-4 py-5'>
        {/* <Link href="/">
          
        </Link> */}

        <div className='w-full flex items-center justify-end'>
          <div className=''>
            <button className='px-3  text-sm rounded-md' onClick={() => deleteNote(editId)}>
              <Image src={trash} alt="hapus" width="26px" height="26px" />
            </button>
          </div>

          <div className=''>
            <button className='px-3  text-sm rounded-md' onClick={() => archiveNote(editId)}>
              <Image src={bookmark} alt="hapus" width="26px" height="26px" />
            </button>
          </div>
        </div>
        

        <form className='mt-8' onSubmit={updateNote}>
            <div className='py-2'>
              <input className='bg-background px-2 py-1 text-xl w-full font-semibold outline-none' type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Judul' />
            </div>

          
            <div className='py-2'>
              <textarea className='bg-background px-2 py-1 text-base text-[#999] font-normal w-full h-screen outline-none' type="text" value={textNote} onChange={(e) => setNote(e.target.value)} placeholder='masukan catatan kamu' />
            </div>
          

          
            <div className='absolute top-0 left-0 pt-3'>
              <button className='px-3 py-2 text-sm rounded-md'>
                <Image src={arrowLeft} alt='back' width="26px" height="26px"/>
              </button>
            </div>
        </form>

    </div>
  )
}

export default EditNoteId