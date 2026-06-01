
function Question14({ correctAnswer, wrongAnswer }:
  { correctAnswer: () => void; wrongAnswer: () => void }) {
    
  
  return (
    <>

      <div className='border-4 p-4'>

        <div className='w-2xs'>
          <h1 className='font-bold'>Question 14: Which layer of the OSI model handles routing?</h1>
        </div>


        <div className='grid mt-3 gap-4'>
          <button className='border-2 p-1 font-bold cursor-pointer' onClick={wrongAnswer}>Physical Layer</button>
          <button className='border-2 p-1 font-bold cursor-pointer' onClick={wrongAnswer}>Data Link Layer</button>
          <button className='border-2 p-1 font-bold cursor-pointer' onClick={correctAnswer}>Network Layer</button>
          <button className='border-2 p-1 font-bold cursor-pointer' onClick={wrongAnswer}>Application Layer</button>
        </div>

      </div>

    </>

  )
}

export default Question14