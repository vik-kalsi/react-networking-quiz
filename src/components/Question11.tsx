
function Question11({ correctAnswer, wrongAnswer }:
  { correctAnswer: () => void; wrongAnswer: () => void }) {
    
  
  return (
    <>

      <div className='border-4 p-4'>

        <div className='w-2xs'>
          <h1 className='font-bold'>Question 11: Which operating system is most commonly used for web servers?</h1>
        </div>


        <div className='grid mt-3 gap-3'>
          <button className='border-2 p-1 font-bold' onClick={correctAnswer}>Linux</button>
          <button className='border-2 p-1 font-bold' onClick={wrongAnswer}>Android</button>
          <button className='border-2 p-1 font-bold' onClick={wrongAnswer}>iOS</button>
          <button className='border-2 p-1 font-bold' onClick={wrongAnswer}>ChromeOS</button>
        </div>

      </div>

    </>

  )
}

export default Question11