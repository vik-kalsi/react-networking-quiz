
function Question8({ correctAnswer, wrongAnswer }:
  { correctAnswer: () => void; wrongAnswer: () => void }) {
    
  
  return (
    <>

      <div className='border-4 p-4'>

        <div className='w-2xs md:w-xl'>
          <h1 className='font-bold md:text-4xl'>Question 8: What is the main purpose of a firewall?</h1>
        </div>


        <div className='grid mt-3 gap-4 md:gap-6'>
          <button className='border-2 p-1 font-bold cursor-pointer md:text-3xl' onClick={wrongAnswer}>Increase internet speed</button>
          <button className='border-2 p-1 font-bold cursor-pointer md:text-3xl' onClick={wrongAnswer}>Store files</button>
          <button className='border-2 p-1 font-bold cursor-pointer md:text-3xl' onClick={correctAnswer}>Monitor and filter network traffic</button>
          <button className='border-2 p-1 font-bold cursor-pointer md:text-3xl' onClick={wrongAnswer}>Assign IP addresses</button>
        </div>

      </div>

    </>

  )
}

export default Question8