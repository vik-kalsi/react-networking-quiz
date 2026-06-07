
function Question10({ correctAnswer, wrongAnswer }:
  { correctAnswer: () => void; wrongAnswer: () => void }) {
    
  
  return (
    <>

      <div className='border-4 p-4'>

        <div className='w-2xs md:w-xl'>
          <h1 className='font-bold md:text-4xl'>Question 10: What port does HTTPS commonly use?</h1>
        </div>


        <div className='grid mt-3 gap-4 md:gap-6'>
          <button className='border-2 p-1 font-bold cursor-pointer md:text-3xl' onClick={wrongAnswer}>22</button>
          <button className='border-2 p-1 font-bold cursor-pointer md:text-3xl' onClick={wrongAnswer}>53</button>
          <button className='border-2 p-1 font-bold cursor-pointer md:text-3xl' onClick={wrongAnswer}>110</button>
          <button className='border-2 p-1 font-bold cursor-pointer md:text-3xl' onClick={correctAnswer}>443</button>
        </div>

      </div>

    </>

  )
}

export default Question10