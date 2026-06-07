
function Question12({ correctAnswer, wrongAnswer }:
  { correctAnswer: () => void; wrongAnswer: () => void }) {
    
  
  return (
    <>

      <div className='border-4 p-4'>

        <div className='w-2xs md:w-xl'>
          <h1 className='font-bold md:text-4xl'>Question 12: What does LAN stand for?</h1>
        </div>


        <div className='grid mt-3 gap-4 md:gap-6'>
          <button className='border-2 p-1 font-bold cursor-pointer md:text-3xl' onClick={correctAnswer}>Local Area Network</button>
          <button className='border-2 p-1 font-bold cursor-pointer md:text-3xl' onClick={wrongAnswer}>Large Access Node</button>
          <button className='border-2 p-1 font-bold cursor-pointer md:text-3xl' onClick={wrongAnswer}>Logical Area Network</button>
          <button className='border-2 p-1 font-bold cursor-pointer md:text-3xl' onClick={wrongAnswer}>Linked Application Network</button>
        </div>

      </div>

    </>

  )
}

export default Question12