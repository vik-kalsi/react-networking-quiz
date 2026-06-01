
function Question1(
  { correctAnswer, wrongAnswer }:
  { correctAnswer: () => void; wrongAnswer: () => void }) {
    
  return (
    <>

      <div className='border-4 p-4'>

        <div className='w-2xs'>
          <h1 className='font-bold'>Question 1: What does DNS stand for?</h1>
        </div>


        <div className='grid mt-3 gap-4'>
          <button className='border-2 p-1 font-bold cursor-pointer' onClick={wrongAnswer}>Dynamic Network System</button>
          <button className='border-2 p-1 font-bold cursor-pointer' onClick={correctAnswer}>Domain Name System</button>
          <button className='border-2 p-1 font-bold cursor-pointer' onClick={wrongAnswer}>Digital Naming Service</button>
          <button className='border-2 p-1 font-bold cursor-pointer' onClick={wrongAnswer}>Data Network Server</button>
        </div>

      </div>

    </>

  )
}

export default Question1