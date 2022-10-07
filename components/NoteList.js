import React from 'react'
import { useState, useEffect } from 'react'
import {getData} from "../data"

const NoteList = () => {
    const [dataNote, setNote] = useState(getData())


    // useEffect(() => {
    //     fectData()
    // }, []);

    // const fectData = async() => {
    //     const response = await fetch('https://my-json-server.typicode.com/rianllauo/fakeapi/data');
    //     const data =  await response.json();
    //     setNote(data);
    // }

    // console.log(dataNote);
    // const data = data.json();

  return (
    <div className='w-full'>
        <ul className='grid grid-cols-2 grid-flow-row gap-3'>
            { dataNote.map(item => (

                <li key={item.id} className="p-3 border-2 border-darkLighter rounded-md">
                    <h1 className='text-sm font-semibold mb-1.5 leading-none'>{item.title}</h1>
                    <p className='text-xs text-[#999] leading-tight'>{item.note}</p>
                </li>

            ))}
        </ul>
    </div>
  )
}

export default NoteList