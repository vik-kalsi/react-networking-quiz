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



  //Question 1 ######################################################
  let Q1Correct = () => {
    alert("Correct Answer")
    setScore (score + 1)
  }

  let Q1Wrong = () => {
    alert("Wrong Answer")
  }
  //Question 1 #######################################################



  //Question 2 ######################################################
  let Q2Correct = () => {
    alert("Correct Answer")
    setScore (score + 1)
  }

  let Q2Wrong = () => {
    alert("Wrong Answer")
  }
  //Question 2 #######################################################



  //Question 3 ######################################################
  let Q3Correct = () => {
    alert("Correct Answer")
    setScore (score + 1)
  }

  let Q3Wrong = () => {
    alert("Wrong Answer")
  }
  //Question 3 #######################################################



  //Question 4 ######################################################
  let Q4Correct = () => {
    alert("Correct Answer")
    setScore (score + 1)
  }

  let Q4Wrong = () => {
    alert("Wrong Answer")
  }
  //Question 4 #######################################################



  //Question 5 ######################################################
  let Q5Correct = () => {
    alert("Correct Answer")
    setScore (score + 1)
  }

  let Q5Wrong = () => {
    alert("Wrong Answer")
  }
  //Question 5 #######################################################



  //Question 6 ######################################################
  let Q6Correct = () => {
    alert("Correct Answer")
    setScore (score + 1)
  }

  let Q6Wrong = () => {
    alert("Wrong Answer")
  }
  //Question 6 #######################################################




  //Question 7 ######################################################
  let Q7Correct = () => {
    alert("Correct Answer")
    setScore (score + 1)
  }

  let Q7Wrong = () => {
    alert("Wrong Answer")
  }
  //Question 7 #######################################################



  //Question 8 ######################################################
  let Q8Correct = () => {
    alert("Correct Answer")
    setScore (score + 1)
  }

  let Q8Wrong = () => {
    alert("Wrong Answer")
  }
  //Question 8 #######################################################



  //Question 9 ######################################################
  let Q9Correct = () => {
    alert("Correct Answer")
    setScore (score + 1)
  }

  let Q9Wrong = () => {
    alert("Wrong Answer")
  }
  //Question 9 #######################################################



  //Question 10 ######################################################
  let Q10Correct = () => {
    alert("Correct Answer")
    setScore (score + 1)
  }

  let Q10Wrong = () => {
    alert("Wrong Answer")
  }
  //Question 10 #######################################################


  //Question 11 ######################################################
  let Q11Correct = () => {
    alert("Correct Answer")
    setScore (score + 1)
  }

  let Q11Wrong = () => {
    alert("Wrong Answer")
  }
  //Question 11 #######################################################


  //Question 12 ######################################################
  let Q12Correct = () => {
    alert("Correct Answer")
    setScore (score + 1)
  }

  let Q12Wrong = () => {
    alert("Wrong Answer")
  }
  //Question 12 #######################################################



  //Question 13 ######################################################
  let Q13Correct = () => {
    alert("Correct Answer")
    setScore (score + 1)
  }

  let Q13Wrong = () => {
    alert("Wrong Answer")
  }
  //Question 13 #######################################################



  //Question 14 ######################################################
  let Q14Correct = () => {
    alert("Correct Answer")
    setScore (score + 1)
  }

  let Q14Wrong = () => {
    alert("Wrong Answer")
  }
  //Question 14 #######################################################



  //Question 15 ######################################################
  let Q15Correct = () => {
    alert("Correct Answer")
    setScore (score + 1)
  }

  let Q15Wrong = () => {
    alert("Wrong Answer")
  }
  //Question 15 #######################################################




  return (
    <>
      <div className="grid justify-center my-7 mx-4">
        <p className='font-bold text-3xl my-4 mx-4'>Score is: {score}</p>

        <Question1 correctAnswer={Q1Correct} wrongAnswer={Q1Wrong}/>
        <Question2 correctAnswer={Q2Correct} wrongAnswer={Q2Wrong}/>
        <Question3 correctAnswer={Q3Correct} wrongAnswer={Q3Wrong}/>
        <Question4 correctAnswer={Q4Correct} wrongAnswer={Q4Wrong}/>
        <Question5 correctAnswer={Q5Correct} wrongAnswer={Q5Wrong}/>
        <Question6 correctAnswer={Q6Correct} wrongAnswer={Q6Wrong}/>
        <Question7 correctAnswer={Q7Correct} wrongAnswer={Q7Wrong}/>
        <Question8 correctAnswer={Q8Correct} wrongAnswer={Q8Wrong}/>
        <Question9 correctAnswer={Q9Correct} wrongAnswer={Q9Wrong}/>
        <Question10 correctAnswer={Q10Correct} wrongAnswer={Q10Wrong}/>
        <Question11 correctAnswer={Q11Correct} wrongAnswer={Q11Wrong}/>
        <Question12 correctAnswer={Q12Correct} wrongAnswer={Q12Wrong}/>
        <Question13 correctAnswer={Q13Correct} wrongAnswer={Q13Wrong}/>
        <Question14 correctAnswer={Q14Correct} wrongAnswer={Q14Wrong}/>
        <Question15 correctAnswer={Q15Correct} wrongAnswer={Q15Wrong}/>
        


      </div>
      
    </>
  )
}

export default App
