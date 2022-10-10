import React from 'react'
import Link from 'next/link'

const NoteList = ({dataNote}) => {
    
  return (
    <div className='w-full'>
        <ul className='grid grid-cols-2 grid-flow-row-dense gap-2'>
            { dataNote.map(item => (
                // <Link className='' key={item.id} href={`/edit/${item.id}`}>
                    <li key={item.id} className="p-3 border-2 border-darkLighter rounded-md">
                        <h1 className='text-sm font-semibold mb-1.5 leading-none'>{item.title}</h1>
                        <p className='text-xs text-[#999] leading-tight'>{item.note}</p>
                    </li>
                // </Link>
            ))}
        </ul>
    </div>
  )
}

export default NoteList