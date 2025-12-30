export const ControlFlowForSummation = () => {
    let loopResultArray = []
    let summation = 0

    // 1️⃣ 배열 생성
    for (let i = 1; i <= 3; i++) {
        loopResultArray.push(i)
    }

    // 2️⃣ 배열 합산
    for (let i = 1; i <= 3; i++) {
        summation += loopResultArray[i - 1]
    }

    return (
        <div>
            <h3>javascript 제어문(for + summation)</h3>

            <pre>{`
loopResultArray = ${loopResultArray}
summation = ${summation}
            `}</pre>
        </div>
    )
}