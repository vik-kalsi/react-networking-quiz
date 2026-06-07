
function Question2(
  { correctAnswer, wrongAnswer }:
  { correctAnswer: () => void; wrongAnswer: () => void }) {
    
  return (
    <>

      <div className='border-4 p-4'>

        <div className='w-2xs md:w-xl'>
          <h1 className='font-bold md:text-4xl'>Question 2: Which protocol is commonly used to securely transfer files between servers?</h1>
        </div>


        <div className='grid mt-3 gap-4 md:gap-6'>
          <button className='border-2 p-1 font-bold cursor-pointer md:text-3xl' onClick={wrongAnswer}>FTP</button>
          <button className='border-2 p-1 font-bold cursor-pointer md:text-3xl' onClick={wrongAnswer}>HTTP</button>
          <button className='border-2 p-1 font-bold cursor-pointer md:text-3xl' onClick={correctAnswer}>SFTP</button>
          <button className='border-2 p-1 font-bold cursor-pointer md:text-3xl' onClick={wrongAnswer}>Telnet</button>
        </div>

      </div>

    </>

  )
}

export default Question2