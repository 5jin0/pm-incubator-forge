export const ControlFlowFor = () => {
    let loopResultArray = [];// 결과를 저장할 배열

    for (let i = 1; i <= 5; i++) {// 1부터 5까지 반복
        loopResultArray.push(i);
    }
    return (
        <div>
            <h2>Control Flow For Example</h2>
            <pre>{`
loopResultArray = [${loopResultArray.join(", ")}]; // for 문 결과 저장
            `
            }</pre>        
        </div>
    )
}