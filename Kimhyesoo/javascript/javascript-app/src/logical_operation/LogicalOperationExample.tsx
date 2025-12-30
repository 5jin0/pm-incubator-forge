export const LogicalOperationExample = () => {
    // ===의 경우 완벽하게 일치하는지 여부
    // 타입까지 일치하는지 확인
    // 현재 숫자 10과 문자열 10을 비교하기 때문에 false
    const strictEquality = 10 === ("10" as any)
    // 숫자 10과 문자열 10을 비교하는데 type은 보지 x
    // 그러므로 true
    const roughEquality = 10 == ("10" as any)
    // 논리연산 AND 모든 것이 참인 경우에만 참
    const logicalAnd = true && false
    // 논리연산 OR 하나라도 참인 경우 참
    const logicalOr = true || false
    // 비트연산 AND 
    // 2^2, 2^1, 2^0
    // 1    0   1   (5)
    // 1    0   0   (4) 
    const bitwiseAnd = 5 & 4    //4
    // 비트연산 OR 
    // 2^2, 2^1, 2^0
    // 1    0   1   (5)
    // 0    1   0   (2) 
    const bitwiseOr = 5 | 2     //7
    
    return(
        <div>
            <h3>Javascript 변수와 데이터 타입</h3>
            <pre>{
                // `는 ~키 아래 있는 기호
                `
                console.log(10 ==="10");           // ${strictEquality}
                console.log(10 =="10");           // ${roughEquality}
                console.log(true && false);           // ${logicalAnd}
                console.log(true || false);           // ${logicalOr}
                console.log(5 & 4);           // ${bitwiseAnd}
                console.log(5 | 2);           // ${bitwiseOr}
                `
            
            }</pre>
        </div>
    )
}