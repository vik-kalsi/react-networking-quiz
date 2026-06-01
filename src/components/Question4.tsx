
function Question4({ correctAnswer, wrongAnswer }:
  { correctAnswer: () => void; wrongAnswer: () => void }) {
    
  
  return (
    <>

      <div className='border-4 p-4'>

        <div className='w-2xs'>
          <h1 className='font-bold'>Question 4: Which device connects multiple computers within a LAN?</h1>
        </div>


        <div className='grid mt-3 gap-4'>
          <button className='border-2 p-1 font-bold cursor-pointer' onClick={wrongAnswer}>Router</button>
          <button className='border-2 p-1 font-bold cursor-pointer' onClick={correctAnswer}>Switch</button>
          <button className='border-2 p-1 font-bold cursor-pointer' onClick={wrongAnswer}>Modem</button>
          <button className='border-2 p-1 font-bold cursor-pointer' onClick={wrongAnswer}>Firewall</button>
        </div>

      </div>

    </>

  )
}

export default Question4