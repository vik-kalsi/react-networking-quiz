
function Question8({ correctAnswer, wrongAnswer }:
  { correctAnswer: () => void; wrongAnswer: () => void }) {
    
  
  return (
    <>

      <div className='border-4 p-4'>

        <div className='w-2xs'>
          <h1 className='font-bold'>Question 8: What is the main purpose of a firewall?</h1>
        </div>


        <div className='grid mt-3 gap-4'>
          <button className='border-2 p-1 font-bold cursor-pointer' onClick={wrongAnswer}>Increase internet speed</button>
          <button className='border-2 p-1 font-bold cursor-pointer' onClick={wrongAnswer}>Store files</button>
          <button className='border-2 p-1 font-bold cursor-pointer' onClick={correctAnswer}>Monitor and filter network traffic</button>
          <button className='border-2 p-1 font-bold cursor-pointer' onClick={wrongAnswer}>Assign IP addresses</button>
        </div>

      </div>

    </>

  )
}

export default Question8