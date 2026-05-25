
function Question7({ correctAnswer, wrongAnswer }:
  { correctAnswer: () => void; wrongAnswer: () => void }) {
    
  
  return (
    <>

      <div className='border-4 p-4'>

        <div className='w-2xs'>
          <h1 className='font-bold'>Question 7: Which protocol is used for sending emails?</h1>
        </div>


        <div className='grid mt-3 gap-3'>
          <button className='border-2 p-1 font-bold' onClick={correctAnswer}>SMTP</button>
          <button className='border-2 p-1 font-bold' onClick={wrongAnswer}>SNMP</button>
          <button className='border-2 p-1 font-bold' onClick={wrongAnswer}>DHCP</button>
          <button className='border-2 p-1 font-bold' onClick={wrongAnswer}>FTP</button>
        </div>

      </div>

    </>

  )
}

export default Question7