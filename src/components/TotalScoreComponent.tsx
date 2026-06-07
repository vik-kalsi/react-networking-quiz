

function TotalScoreComponent(props:{ finalScore: number}) {
  


    let StartAgain = () => {
        window.location.reload();
    }

    return (
        <>
            <div className="grid justify-center space-y-6 md:mx-4 md:gap-6">
                <h1 className="text-4xl">Final Score</h1>
                <p className="text-3xl">You've scored {props.finalScore} correct answers out of 15 questions ({((props.finalScore/15)*100).toFixed(2)}%)</p>
                <button className="border-2 p-2 text-2xl w-xs cursor-pointer" onClick={StartAgain}>Start Again</button>
            </div>
        </>
  )

}

export default TotalScoreComponent