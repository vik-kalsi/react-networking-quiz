

function TotalScoreComponent(props:{ finalScore: number}) {
  


    let StartAgain = () => {
        window.location.reload();
    }

    return (
        <>
            <div className="space-y-4">
                <h1 className="text-4xl">Final Score</h1>
                <p className="text-3xl">You've scored {props.finalScore} correct answers out of 15 questions ({((props.finalScore/15)*100).toFixed(2)}%)</p>
                <button className="border-2 p-2 text-2xl" onClick={StartAgain}>Start Again</button>
            </div>
        </>
  )

}

export default TotalScoreComponent