
function Question5({ correctAnswer, wrongAnswer }:
  { correctAnswer: () => void; wrongAnswer: () => void }) {
    
  
  return (
    <>

      <div className='border-4 p-4'>

        <div className='w-2xs'>
          <h1 className='font-bold'>Question 5: What does IP stand for in networking?</h1>
        </div>


        <div className='grid mt-3 gap-4'>
          <button className='border-2 p-1 font-bold cursor-pointer' onClick={correctAnswer}>Internet Protocol</button>
          <button className='border-2 p-1 font-bold cursor-pointer' onClick={wrongAnswer}>Internal Process</button>
          <button className='border-2 p-1 font-bold cursor-pointer' onClick={wrongAnswer}>Integrated Program</button>
          <button className='border-2 p-1 font-bold cursor-pointer' onClick={wrongAnswer}>Internet Provider</button>
        </div>

      </div>

    </>

  )
}

export default Question5