export const ControlFlowSummation = () => {
    let loopResultArray = []
    let Summation = 0

    for (let i = 1; i <= 3; i++) {
        loopResultArray.push(i)
    }

    for (let i = 1; i <= 3; i++) {
        Summation += loopResultArray[i]
    }    

    return (
        <div>
            <h3>javascript 제어문 (for)</h3>
            <pre>{
                `
loopResultArray = [${loopResultArray}]
Summation = ${Summation}
                `
            }</pre>
        </div>
    )
} 