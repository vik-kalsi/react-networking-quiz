import { useState } from 'react'
import Question1 from './components/Question1.tsx'
import Question2 from './components/Question2.tsx'
import Question3 from './components/Question3.tsx'
import Question4 from './components/Question4.tsx'
import Question5 from './components/Question5.tsx'
import Question6 from './components/Question6.tsx'
import Question7 from './components/Question7.tsx'
import Question8 from './components/Question8.tsx'
import Question9 from './components/Question9.tsx'
import Question10 from './components/Question10.tsx'
import Question11 from './components/Question11.tsx'
import Question12 from './components/Question12.tsx'
import Question13 from './components/Question13.tsx'
import Question14 from './components/Question14.tsx'
import Question15 from './components/Question15.tsx'


function App() {
  const [score, setScore] = useState(0);



  return (
    <>
      <div className="grid justify-center my-7">
        <p className='font-bold text-3xl my-4'>Score is: {score}</p>

        <Question1 />
        <Question2 />
        <Question3 />
        <Question4 />
        <Question5 />
        <Question6 />
        <Question7 />
        <Question8 />
        <Question9 />
        <Question10 />
        <Question11 />
        <Question12 />
        <Question13 />
        <Question14 />
        <Question15 />
        


      </div>
      
    </>
  )
}

export default App
