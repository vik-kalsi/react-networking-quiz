
function Question12({ correctAnswer, wrongAnswer }:
  { correctAnswer: () => void; wrongAnswer: () => void }) {
    
  
  return (
    <>

      <div className='border-4 p-4'>

        <div className='w-2xs'>
          <h1 className='font-bold'>Question 12: What does LAN stand for?</h1>
        </div>


        <div className='grid mt-3 gap-4'>
          <button className='border-2 p-1 font-bold cursor-pointer' onClick={correctAnswer}>Local Area Network</button>
          <button className='border-2 p-1 font-bold cursor-pointer' onClick={wrongAnswer}>Large Access Node</button>
          <button className='border-2 p-1 font-bold cursor-pointer' onClick={wrongAnswer}>Logical Area Network</button>
          <button className='border-2 p-1 font-bold cursor-pointer' onClick={wrongAnswer}>Linked Application Network</button>
        </div>

      </div>

    </>

  )
}

export default Question12