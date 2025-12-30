export const ControlFlowFor = () => {
    let LoopResultArray = []

    for (let i = 1; i < 3; i++) {
        LoopResultArray.push(i)
    }


    return (
        <div>
            <h3>javascript 제어문 (for)</h3>

            <pre>{
            `
            LoopResultArray = ${LoopResultArray}

            `
    }</pre>
        </div>
    )
}