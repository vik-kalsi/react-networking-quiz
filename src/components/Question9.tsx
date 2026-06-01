
function Question9({ correctAnswer, wrongAnswer }:
  { correctAnswer: () => void; wrongAnswer: () => void }) {
    
  
  return (
    <>

      <div className='border-4 p-4'>

        <div className='w-2xs'>
          <h1 className='font-bold'>Question 9: Which service automatically assigns IP addresses to devices?</h1>
        </div>


        <div className='grid mt-3 gap-4'>
          <button className='border-2 p-1 font-bold cursor-pointer' onClick={wrongAnswer}>DNS</button>
          <button className='border-2 p-1 font-bold cursor-pointer' onClick={correctAnswer}>DHCP</button>
          <button className='border-2 p-1 font-bold cursor-pointer' onClick={wrongAnswer}>SSH</button>
          <button className='border-2 p-1 font-bold cursor-pointer' onClick={wrongAnswer}>TCP</button>
        </div>

      </div>

    </>

  )
}

export default Question9