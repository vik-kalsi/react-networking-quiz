
function Question2(
  { correctAnswer, wrongAnswer }:
  { correctAnswer: () => void; wrongAnswer: () => void }) {
    
  return (
    <>

      <div className='border-4 p-4'>

        <div className='w-2xs'>
          <h1 className='font-bold'>Question 2: Which protocol is commonly used to securely transfer files between servers?</h1>
        </div>


        <div className='grid mt-3 gap-3'>
          <button className='border-2 p-1 font-bold' onClick={wrongAnswer}>FTP</button>
          <button className='border-2 p-1 font-bold' onClick={wrongAnswer}>HTTP</button>
          <button className='border-2 p-1 font-bold' onClick={correctAnswer}>SFTP</button>
          <button className='border-2 p-1 font-bold' onClick={wrongAnswer}>Telnet</button>
        </div>

      </div>

    </>

  )
}

export default Question2