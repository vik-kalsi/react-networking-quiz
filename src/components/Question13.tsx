
function Question13({ correctAnswer, wrongAnswer }:
  { correctAnswer: () => void; wrongAnswer: () => void }) {
    
  
  return (
    <>

      <div className='border-4 p-4'>

        <div className='w-2xs'>
          <h1 className='font-bold'>Question 13: Which protocol allows secure remote login to a server?</h1>
        </div>


        <div className='grid mt-3 gap-4'>
          <button className='border-2 p-1 font-bold cursor-pointer' onClick={wrongAnswer}>Telnet</button>
          <button className='border-2 p-1 font-bold cursor-pointer' onClick={correctAnswer}>SSH</button>
          <button className='border-2 p-1 font-bold cursor-pointer' onClick={wrongAnswer}>FTP</button>
          <button className='border-2 p-1 font-bold cursor-pointer' onClick={wrongAnswer}>POP3</button>
        </div>

      </div>

    </>

  )
}

export default Question13