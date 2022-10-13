import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const NoteList = ({dataNote}) => {
    
    const router = useRouter(); 

    // const deleteNote = async(id) => {
    //     await fetch(`http://localhost:5000/note/${id}`, {
    //         method: "DELETE",
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     });
    //     router.push('/')
    // } 

    // const hapusNote = (id) => {
    //     const hapus = confirm('hapus?');

    //     if ( hapus === true) {
    //         deleteNote(id);
    //     }else{
    //         router.push('/');
    //     }
    // }

  return (
    <div className='w-full'>
        <ul className='grid grid-cols-2 grid-flow-row-dense gap-2'>
            { dataNote.map(item => (
                <Link className='' key={item.id} href={`/edit/${item.id}`}>
                    <li key={item.id} className="max-h-52 overflow-hidden p-3 border-2 border-darkLighter rounded-md z-10">
                        <h1 className='text-sm font-semibold mb-1.5 leading-none'>{item.title}</h1>
                        <div className='pb-3 max-h-38 overflow-hidden demo-3'>
                            <p className='text-xs text-[#999] leading-tight'>{item.textNote}</p>
                        </div>
                        {/* <button onClick={() => hapusNote(item.id)}>Delete</button> */}
                    </li>
                 </Link>
            ))}
            
        </ul>
    </div>
  )
}

export default NoteList