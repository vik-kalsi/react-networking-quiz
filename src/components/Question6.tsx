
function Question6({ correctAnswer, wrongAnswer }:
  { correctAnswer: () => void; wrongAnswer: () => void }) {
    
  
  return (
    <>

      <div className='border-4 p-4'>

        <div className='w-2xs'>
          <h1 className='font-bold'>Question 6: Which command is used to test connectivity between two devices?</h1>
        </div>


        <div className='grid mt-3 gap-4'>
          <button className='border-2 p-1 font-bold cursor-pointer' onClick={wrongAnswer}>tracert</button>
          <button className='border-2 p-1 font-bold cursor-pointer' onClick={wrongAnswer}>ipconfig</button>
          <button className='border-2 p-1 font-bold cursor-pointer' onClick={correctAnswer}>ping</button>
          <button className='border-2 p-1 font-bold cursor-pointer' onClick={wrongAnswer}>netstat</button>
        </div>

      </div>

    </>

  )
}

export default Question6