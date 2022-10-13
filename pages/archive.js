import Link from 'next/link'
import Image from 'next/image'
import arrowLeft from '/public/arrow-left.svg'

export default function Home({dataNote}) {

  // const [dataNote, setNote] = useState([])

  //   useEffect(() => {
  //       fectData()
  //   }, []);

  //   const fectData = async() => {
  //     const response = await fetch('http://localhost:5000/note');
  //     const data =  await response.json();
  //     setNote(data);
  // }
    const filterArchive = 
        dataNote.filter(function (el) {
            return el.archive === true
        });
    
    console.log(filterArchive);

  return (
    
    <div className='max-w-md mx-auto px-4 py-5 overflow-x-hidden'> 

      <div className='flex items-center'>
        <Link  href="/">
          <a className='flex items-center justify-center'> <Image src={arrowLeft} alt='back' width="20px" height="20px"/></a>
        </Link>
        <h1 className='ml-3 text-xl font-semibold'>Arsip</h1>
      </div>
    
        <div className='w-full pt-5'>
            <ul className='grid grid-cols-2 grid-flow-row-dense gap-2'>
                { filterArchive.map(item => (
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

      
       

    </div>
  )
}

export const getServerSideProps = async () =>{
  const response = await fetch("https://6347b41a0484786c6e8665bf.mockapi.io/notes");
  const data = await response.json();

  return {
    props : {
      dataNote : data
    }
  }
}

// export const getServerSideProps = async () => {
//   const response = await fetch("http://localhost:5000/note");
//   const data = await response.json();
//   return {
//     props:{
//       products: data
//     }
     
//   }
// }