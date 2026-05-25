
function Question13({ correctAnswer, wrongAnswer }:
  { correctAnswer: () => void; wrongAnswer: () => void }) {
    
  
  return (
    <>

      <div className='border-4 p-4'>

        <div className='w-2xs'>
          <h1 className='font-bold'>Question 13: Which protocol allows secure remote login to a server?</h1>
        </div>


        <div className='grid mt-3 gap-3'>
          <button className='border-2 p-1 font-bold' onClick={wrongAnswer}>Telnet</button>
          <button className='border-2 p-1 font-bold' onClick={correctAnswer}>SSH</button>
          <button className='border-2 p-1 font-bold' onClick={wrongAnswer}>FTP</button>
          <button className='border-2 p-1 font-bold' onClick={wrongAnswer}>POP3</button>
        </div>

      </div>

    </>

  )
}

export default Question13