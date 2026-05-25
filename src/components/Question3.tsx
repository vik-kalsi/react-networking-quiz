
function Question3(
  { correctAnswer, wrongAnswer }:
  { correctAnswer: () => void; wrongAnswer: () => void }) {
    
  
  return (
    <>

      <div className='border-4 p-4'>

        <div className='w-2xs'>
          <h1 className='font-bold'>Question 3: What is the default port for HTTP?</h1>
        </div>


        <div className='grid mt-3 gap-3'>
          <button className='border-2 p-1 font-bold' onClick={wrongAnswer}>21</button>
          <button className='border-2 p-1 font-bold' onClick={wrongAnswer}>25</button>
          <button className='border-2 p-1 font-bold' onClick={correctAnswer}>80</button>
          <button className='border-2 p-1 font-bold' onClick={wrongAnswer}>443</button>
        </div>

      </div>

    </>

  )
}

export default Question3