import React from 'react'

const NoteDetail = ({ dataNote }) => {
  return (
    <div>
      {dataNote.title} - {dataNote.note};
    </div>
  )
} 

export default NoteDetail;

export const getStaticPaths = async () => {
   const response = await fetch(
      `http://localhost:5000/note/`
   );
   const data = await response.json();

   const paths = data.map(item => ({
      params : {
         noteId: `${item.id}`,
      },
   }));

   return {
      paths : paths,
      fallback: false
   }
}

export const getStaticProps = async ( {params} ) =>{
   const response = await fetch(`http://localhost:5000/note/${params.noteId}`);
   const data = await response.json();
 
   return {
     props : {
       dataNote : data
     }
   }
 }