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

  const [showQuestion1, setShowQuestion1] = useState(true)
  const [showQuestion2, setShowQuestion2] = useState(false)
  const [showQuestion3, setShowQuestion3] = useState(false)
  const [showQuestion4, setShowQuestion4] = useState(false)
  const [showQuestion5, setShowQuestion5] = useState(false)
  const [showQuestion6, setShowQuestion6] = useState(false)
  const [showQuestion7, setShowQuestion7] = useState(false)
  const [showQuestion8, setShowQuestion8] = useState(false)
  const [showQuestion9, setShowQuestion9] = useState(false)
  const [showQuestion10, setShowQuestion10] = useState(false)
  const [showQuestion11, setShowQuestion11] = useState(false)
  const [showQuestion12, setShowQuestion12] = useState(false)
  const [showQuestion13, setShowQuestion13] = useState(false)
  const [showQuestion14, setShowQuestion14] = useState(false)
  const [showQuestion15, setShowQuestion15] = useState(false)




  //Question 1 ######################################################
  let Q1Correct = () => {
    alert("Correct Answer")
    setScore (score + 1)
    setShowQuestion1(false)
    setShowQuestion2(true)
  }

  let Q1Wrong = () => {
    alert("Wrong Answer")
    setShowQuestion1(false)
    setShowQuestion2(true)
  }
  //Question 1 #######################################################



  //Question 2 ######################################################
  let Q2Correct = () => {
    alert("Correct Answer")
    setScore (score + 1)
    setShowQuestion2(false)
    setShowQuestion3(true)
  }

  let Q2Wrong = () => {
    alert("Wrong Answer")
    setShowQuestion2(false)
    setShowQuestion3(true)
  }
  //Question 2 #######################################################



  //Question 3 ######################################################
  let Q3Correct = () => {
    alert("Correct Answer")
    setScore (score + 1)
    setShowQuestion3(false)
    setShowQuestion4(true)
  }

  let Q3Wrong = () => {
    alert("Wrong Answer")
    setShowQuestion3(false)
    setShowQuestion4(true)
  }
  //Question 3 #######################################################



  //Question 4 ######################################################
  let Q4Correct = () => {
    alert("Correct Answer")
    setScore (score + 1)
    setShowQuestion4(false)
    setShowQuestion5(true)
  }

  let Q4Wrong = () => {
    alert("Wrong Answer")
    setShowQuestion4(false)
    setShowQuestion5(true)
  }
  //Question 4 #######################################################



  //Question 5 ######################################################
  let Q5Correct = () => {
    alert("Correct Answer")
    setScore (score + 1)
    setShowQuestion5(false)
    setShowQuestion6(true)
  }

  let Q5Wrong = () => {
    alert("Wrong Answer")
    setShowQuestion5(false)
    setShowQuestion6(true)
  }
  //Question 5 #######################################################



  //Question 6 ######################################################
  let Q6Correct = () => {
    alert("Correct Answer")
    setScore (score + 1)
    setShowQuestion6(false)
    setShowQuestion7(true)
  }

  let Q6Wrong = () => {
    alert("Wrong Answer")
    setShowQuestion6(false)
    setShowQuestion7(true)
  }
  //Question 6 #######################################################




  //Question 7 ######################################################
  let Q7Correct = () => {
    alert("Correct Answer")
    setScore (score + 1)
    setShowQuestion7(false)
    setShowQuestion8(true)
  }

  let Q7Wrong = () => {
    alert("Wrong Answer")
    setShowQuestion7(false)
    setShowQuestion8(true)
  }
  //Question 7 #######################################################



  //Question 8 ######################################################
  let Q8Correct = () => {
    alert("Correct Answer")
    setScore (score + 1)
    setShowQuestion8(false)
    setShowQuestion9(true)
  }

  let Q8Wrong = () => {
    alert("Wrong Answer")
    setShowQuestion8(false)
    setShowQuestion9(true)
  }
  //Question 8 #######################################################



  //Question 9 ######################################################
  let Q9Correct = () => {
    alert("Correct Answer")
    setScore (score + 1)
    setShowQuestion9(false)
    setShowQuestion10(true)
  }

  let Q9Wrong = () => {
    alert("Wrong Answer")
    setShowQuestion9(false)
    setShowQuestion10(true)
  }
  //Question 9 #######################################################



  //Question 10 ######################################################
  let Q10Correct = () => {
    alert("Correct Answer")
    setScore (score + 1)
    setShowQuestion10(false)
    setShowQuestion11(true)
  }

  let Q10Wrong = () => {
    alert("Wrong Answer")
    setShowQuestion10(false)
    setShowQuestion11(true)
  }
  //Question 10 #######################################################


  //Question 11 ######################################################
  let Q11Correct = () => {
    alert("Correct Answer")
    setScore (score + 1)
    setShowQuestion11(false)
    setShowQuestion12(true)
  }

  let Q11Wrong = () => {
    alert("Wrong Answer")
    setShowQuestion11(false)
    setShowQuestion12(true)
  }
  //Question 11 #######################################################


  //Question 12 ######################################################
  let Q12Correct = () => {
    alert("Correct Answer")
    setScore (score + 1)
    setShowQuestion12(false)
    setShowQuestion13(true)
  }

  let Q12Wrong = () => {
    alert("Wrong Answer")
    setShowQuestion12(false)
    setShowQuestion13(true)
  }
  //Question 12 #######################################################



  //Question 13 ######################################################
  let Q13Correct = () => {
    alert("Correct Answer")
    setScore (score + 1)
    setShowQuestion13(false)
    setShowQuestion14(true)
  }

  let Q13Wrong = () => {
    alert("Wrong Answer")
    setShowQuestion13(false)
    setShowQuestion14(true)
  }
  //Question 13 #######################################################



  //Question 14 ######################################################
  let Q14Correct = () => {
    alert("Correct Answer")
    setScore (score + 1)
    setShowQuestion14(false)
    setShowQuestion15(true)
  }

  let Q14Wrong = () => {
    alert("Wrong Answer")
    setShowQuestion14(false)
    setShowQuestion15(true)
  }
  //Question 14 #######################################################



  //Question 15 ######################################################
  let Q15Correct = () => {
    alert("Correct Answer")
    setScore (score + 1)
    setShowQuestion15(false)
    //setShowQuestion15(true) ********************************************
  }

  let Q15Wrong = () => {
    alert("Wrong Answer")
    setShowQuestion15(false)
    //setShowQuestion15(true) ********************************************
  }
  //Question 15 #######################################################




  return (
    <>
      <div className="grid justify-center my-7 mx-4">
        <p className='font-bold text-3xl my-4 mx-4'>Score is: {score}</p>

        {showQuestion1 && <Question1 correctAnswer={Q1Correct} wrongAnswer={Q1Wrong}/> }
        {showQuestion2 && <Question2 correctAnswer={Q2Correct} wrongAnswer={Q2Wrong}/> }
        {showQuestion3 && <Question3 correctAnswer={Q3Correct} wrongAnswer={Q3Wrong}/> }
        {showQuestion4 && <Question4 correctAnswer={Q4Correct} wrongAnswer={Q4Wrong}/> }
        {showQuestion5 && <Question5 correctAnswer={Q5Correct} wrongAnswer={Q5Wrong}/> }
        {showQuestion6 && <Question6 correctAnswer={Q6Correct} wrongAnswer={Q6Wrong}/> }
        {showQuestion7 && <Question7 correctAnswer={Q7Correct} wrongAnswer={Q7Wrong}/> }
        {showQuestion8 && <Question8 correctAnswer={Q8Correct} wrongAnswer={Q8Wrong}/> }
        {showQuestion9 && <Question9 correctAnswer={Q9Correct} wrongAnswer={Q9Wrong}/> }
        {showQuestion10 && <Question10 correctAnswer={Q10Correct} wrongAnswer={Q10Wrong}/> }
        {showQuestion11 && <Question11 correctAnswer={Q11Correct} wrongAnswer={Q11Wrong}/> }
        {showQuestion12 && <Question12 correctAnswer={Q12Correct} wrongAnswer={Q12Wrong}/> }
        {showQuestion13 && <Question13 correctAnswer={Q13Correct} wrongAnswer={Q13Wrong}/> }
        {showQuestion14 && <Question14 correctAnswer={Q14Correct} wrongAnswer={Q14Wrong}/> }
        {showQuestion15 && <Question15 correctAnswer={Q15Correct} wrongAnswer={Q15Wrong}/> }
        


      </div>
      
    </>
  )
}

export default App
