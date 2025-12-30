export const ControlFlowForSummation = () => {
    let loopReusltArray = []
    let summation = 0

    for (let i = 1; i <= 3; i++) {
        loopReusltArray.push(i)
    }

    for (let i = 1; i <=3; i++) {
        summation += loopReusltArray[i - 1]
    }

    return (
        <div>
            <h3>javascript 제어문 (for)</h3>

            <pre>{
                `
loopResultArray = ${loopReusltArray}
summation = ${summation}
                `
                }</pre>
        </div>
    )
}