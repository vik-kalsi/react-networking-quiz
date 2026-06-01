
function Question15({ correctAnswer, wrongAnswer }:
  { correctAnswer: () => void; wrongAnswer: () => void }) {
    
  
  return (
    <>

      <div className='border-4 p-4'>

        <div className='w-2xs'>
          <h1 className='font-bold'>Question 15: What is the purpose of a proxy server?</h1>
        </div>


        <div className='grid mt-3 gap-4'>
          <button className='border-2 p-1 font-bold cursor-pointer' onClick={wrongAnswer}>To cool hardware</button>
          <button className='border-2 p-1 font-bold cursor-pointer' onClick={correctAnswer}>To manage and filter requests between clients and servers</button>
          <button className='border-2 p-1 font-bold cursor-pointer' onClick={wrongAnswer}>To create electrical power</button>
          <button className='border-2 p-1 font-bold cursor-pointer' onClick={wrongAnswer}>To replace DNS</button>
        </div>

      </div>

    </>

  )
}

export default Question15