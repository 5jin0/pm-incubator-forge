export const ControlFlowFor = () => {
    let loopReusltArray = []

    for (let i = 1; i <= 3; i++) {
        loopReusltArray.push(i)
    }

    return (
        <div>
            <h3>javascript 제어문 (for)</h3>

            <pre>{
                `
loopResultArray = ${loopReusltArray}
                `
                }</pre>
        </div>
    )
}