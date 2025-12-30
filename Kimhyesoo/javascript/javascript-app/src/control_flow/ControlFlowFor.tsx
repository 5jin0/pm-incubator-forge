export const ControlFlowFor = () => {
    // 반복을 시켜야하기 때문에 for, foreach와 함께 사용하는 것이 좋음.
    
    let loopResultArray = []
    // 대괄호는 배열
    //  배열은 여러개의 정보를 한공간에 닮음
    for( let i =1; i<=3; i++){
        loopResultArray.push(i)
    }

    return(
        <div>
            <h3>Javascript 제어문(for)</h3>
            <pre>{
            `
            loopResultArray = ${loopResultArray}
            ` 
            }</pre>
        </div>
    )
}