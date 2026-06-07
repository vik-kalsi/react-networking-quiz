
function Question5({ correctAnswer, wrongAnswer }:
  { correctAnswer: () => void; wrongAnswer: () => void }) {
    
  
  return (
    <>

      <div className='border-4 p-4'>

        <div className='w-2xs md:w-xl'>
          <h1 className='font-bold md:text-4xl'>Question 5: What does IP stand for in networking?</h1>
        </div>


        <div className='grid mt-3 gap-4 md:gap-6'>
          <button className='border-2 p-1 font-bold cursor-pointer md:text-3xl' onClick={correctAnswer}>Internet Protocol</button>
          <button className='border-2 p-1 font-bold cursor-pointer md:text-3xl' onClick={wrongAnswer}>Internal Process</button>
          <button className='border-2 p-1 font-bold cursor-pointer md:text-3xl' onClick={wrongAnswer}>Integrated Program</button>
          <button className='border-2 p-1 font-bold cursor-pointer md:text-3xl' onClick={wrongAnswer}>Internet Provider</button>
        </div>

      </div>

    </>

  )
}

export default Question5